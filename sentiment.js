import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.5.4";

window.pipeline = pipeline;

const analizeButton = document.getElementById("analizeButton");

analizeButton.addEventListener("click", async () => {
  analyzeSentiment();
});

let sentimentAnalisys;

async function initializeModel() {
  sentimentAnalisys = await pipeline("sentiment-analysis");
}

async function analyzeSentiment() {
  const textFieldValue = document.getElementById("sentimentText").value.trim();

  const result = await sentimentAnalisys(textFieldValue);

  document.getElementById("outputArea").innerText = JSON.stringify(
    result,
    null,
    2
  );
}

async function analizeReview() {
  console.log("analize review");
}

window.addEventListener("DOMContentLoaded", initializeModel);
