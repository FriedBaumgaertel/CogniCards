import OpenAI from "openai"; //das hier muss noch in vue umgeschachtelt werden
import { createNewStack, addCardToStack } from "./dataTransferHandler";
import { get_session_data_item } from "./crossPagePersistence";

export async function read_input_data(files, title, description) { // die funktionmuss evtl. in die input validation
  const callHeader = 'Give me a fitting title and a short recap for each of the major points of the following text. Do not use more than two sentences per recap. Keep this structure:{ 1:{"title": <title1>, "body": <recap1>},...}:'
  const callClosure = ' Make sure your answer is a valid JSON with the format given earlier.'

  if (files.length > 0) {
    const file = files[0];
    if (file.type === "text/plain") {
      const reader = new FileReader();

      reader.onload = async function (e) {
        const content = e.target.result;
        console.log(`Filename: ${file.name}`); // title of the new stack
        const response = await call_to_openAI_api(`${callHeader} ${content} ${callClosure}`); // sent to chatGPT
        create_automated_stack(response,title,description);
      };

      reader.readAsText(file);
    } else {
      console.warn("Please drop a .txt file");
    }
  }
}

async function call_to_openAI_api(text) { //check tokens here: https://platform.openai.com/tokenizer
  let key = prompt("Enter a valid OpenAI token:");
  let openai;
  if (!key) {
    return null;
  }
  try {
    openai = new OpenAI({ // NOT FOR BROWSER ENVIRONMENT; only prototypes!!!!
      apiKey: key, //hier muss noch n input hin
      dangerouslyAllowBrowser: true,
    });


    console.log(text);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: text }],
      model: "gpt-4"//"gpt-3.5-turbo",or "gpt-4"
    })

    try {
      const response = JSON.parse(chatCompletion.choices[0].message.content); //return the cards chatgpt has generated
      return response;
    } catch (error) {
      console.warn(error);
    }
  } catch {
    alert("Failed to call to OPENAI. Check your token");
  }
  return null;
}

async function create_automated_stack(response, title, description) {
  const upload_success = await createNewStack(title, description);
  if (upload_success) {
    let tokens = get_session_data_item("tokens"); //retrieve correct token for adding cards
    let token = "";
    for (const val_idx in tokens) {
      if (tokens[val_idx].name == title) {
        token = tokens[val_idx].token;
        console.log(`stackID: ${token}`);
        break;
      }
    }

    console.log(response);
    for (const idx in response) {
      try {
        await addCardToStack(token,response[idx].title,response[idx].body);
      } catch { }
    }
  }
}