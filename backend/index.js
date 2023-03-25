require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function api_call(){
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
}

api_call();