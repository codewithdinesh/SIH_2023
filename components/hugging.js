import { client } from "@gradio/client";

const response_0 = await fetch("public/WhatsApp Image 2023-09-16 at 06.09.57.jpg");
const exampleImage = await response_0.blob();
						
const app = await client("https://sukhmani1303-impira-layoutlm-invoices.hf.space/");
const result = await app.predict("/predict", [
				exampleImage, 	// blob in 'Input Document' Image component		
				"Howdy!", // string  in 'Question' Textbox component
	]);

console.log(result.data);