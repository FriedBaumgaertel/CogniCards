import OpenAI from "openai"; //das hier muss noch in vue umgeschachtelt werden

export function read_input_data(event){//files) { // die funktionmuss evtl. in die input validation
  const callHeader = 'Give me a fitting title and a short recap for each of the major points of the following text. Do not use more than two sentences per recap. Keep this structure:{ 1:{"title": <title1>, "body": <recap1>},...}:'
  const callClosure = ' Make sure your answer is a valid JSON with the format given earlier.'
  event.preventDefault();

  const files = event.dataTransfer.files;

  if (files.length > 0) {
    const file = files[0];
    if (file.type === "text/plain") {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;
        console.log(`Filename: ${file.name}`); // title of the new stack
        call_to_openAI_api(`${callHeader} ${content} ${callClosure}`); // sent to chatGPT
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
      const response = JSON.parse(chatCompletion.choices[0].message.content);
      console.log(response);
      return response;
    } catch (error){
      console.warn(error);
    }
  } catch {
    alert("Failed to call to OPENAI. Check your token");
  }
  return null;
}