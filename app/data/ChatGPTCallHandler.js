/*import OpenAI from "openai"; //das hier muss noch in vue umgeschachtelt werden

const openai = new OpenAI({
    apiKey: ""
});*/

function allowDrop(event) {
    event.preventDefault();
}

function read_input_data(event) { // die funktionmuss evtl. in die input validation
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
    return new Promise(resolve => {
        /*const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: text }],
            model: "gpt-3.5-turbo", //or "gpt-4"
        });
        console.log(chatCompletion);
        console.log(chatCompletion.choices);
        console.log(chatCompletion.choices[0]);
        console.log(chatCompletion.choices[0].text);
        */
        console.log(text);
    });
}

/*  Beispielsantwort von ChatGPT:
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