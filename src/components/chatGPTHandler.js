import OpenAI from "openai"; //das hier muss noch in vue umgeschachtelt werden

export function read_input_data(event) { // die funktionmuss evtl. in die input validation
  const callHeader = "Give me a fitting title and a short recap for each of the major points of the following text and keep this structure:{ 1:{title: <title1>, body: <recap1>},...}:"

  event.preventDefault();

  const files = event.dataTransfer.files;

  if (files.length > 0) {
    const file = files[0];
    if (file.type === "text/plain") {
      const reader = new FileReader();

      reader.onload = function (e) {
        const content = e.target.result;
        console.log(`Filename: ${file.name}`); // title of the new stack
        call_to_openAI_api(`${callHeader} ${content}`); // sent to chatGPT
      };

      reader.readAsText(file);
    } else {
      console.warn("Please drop a .txt file");
    }
  }
}

async function call_to_openAI_api(text) { //check tokens here: https://platform.openai.com/tokenizer
  let key = prompt("Enter a valid OpenAI token:");
  if(!key){
    return null;
  }
  let openai = new OpenAI({ // NOT FOR BROWSER ENVIRONMENT; only prototypes!!!!
    apiKey: key, //hier muss noch n input hin
    dangerouslyAllowBrowser: true,
  });

  console.log(text);
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: text }],
    model: "gpt-4"//"gpt-3.5-turbo",or "gpt-4"
  })

  try {
    console.log(chatCompletion);
    /*console.log(chatCompletion.choices);
    console.log(chatCompletion.choices[0]);
    console.log(chatCompletion.choices[0].text);*/
  }catch{
    console.log("fail");
  }
    
}

/*  Beispielsantworten von ChatGPT:

// via api
{
   \n1:{
    \ntitle: \"Development and Launch of Airbus A340\", 
    \nbody: \"The Airbus A340 is a long-range, wide-body passenger airliner developed and produced by Airbus. Conceived in the mid-1970s as a derivative of the A300, the A340 was developed alongside the A330 twinjet. Both models were launched in June 1987 upon receipt of their first orders. The A340-300 made its maiden flight on 25 October 1991, and received its certification, along with the A340-200, on 22 December 1992. The larger A340-500/600 versions were launched on 8 December 1997, with the A340-600 entering service on 1 August 2002.\"}, \n2:{\ntitle: \"Design and Specifications of Early A340s\", \nbody: \"Maintaining the eight-abreast economy cross-section of the A300, the early A340-200/300 version shared a similar airframe structure with the A330. The design featured four 151 kN CFM56s engines instead of the conventional two high-thrust turbofans to bypass ETOPS restrictions on trans-oceanic routes, as well as a three-leg main landing gear to support a heavier maximum take-off weight.  Both models had fly-by-wire controls and a similar glass cockpit.\"},\n3:{\ntitle: \"Design Evolution with the A340-500/600 Models\", \nbody: \"The later A340-500/600 versions featured larger wings and stronger 275 kN Rolls-Royce Trent 500 engines, designed to support a heavier maximum take-off weight. A noticeable difference from their predecessors, the updated designs further improved the performance and capabilities of the A340 model.\"
  }\n
}"


// via a browser
{
  "1": {
    "title": "Genesis of the Airbus A340",
    "body": "In the mid-1970s, Airbus conceived the A340 as a long-range, wide-body passenger airliner in parallel with the A330, stemming from derivatives of the A300. Both designs were launched in June 1987, with the A340-300 making its maiden flight in October 1991."
  },
  "2": {
    "title": "Certification and Service Entry",
    "body": "The A340-300 variant, certified in December 1992, entered service in March 1993 with launch customers Lufthansa and Air France. This marked the beginning of the A340 series, setting a foundation for its future variants, including the larger A340-500/600."
  },
  "3": {
    "title": "Evolution of A340-500/600",
    "body": "Launched in December 1997, the A340-500/600 featured significant advancements. The A340-600 conducted its maiden flight in April 2001 and entered service in August 2002. These models boasted a larger wing and were powered by Rolls-Royce Trent 500 engines, accommodating a heavier maximum takeoff weight."
  },
  "4": {
    "title": "Design Features of A340-200/300",
    "body": "Retaining the eight-abreast economy cross-section of the A300, the early A340-200/300 shared similarities with the A330. Key differences included four CFM56 engines and a three-leg main landing gear to address ETOPS restrictions and support trans-oceanic routes."
  },
  "5": {
    "title": "Technological Advancements",
    "body": "Both A340 variants incorporated fly-by-wire controls, first introduced on the A320, along with a modern glass cockpit. These technological innovations enhanced control systems and operational efficiency for the A340 series."
  }
}
*/