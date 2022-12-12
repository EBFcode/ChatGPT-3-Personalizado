const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/engines/davinci/completions";

const messageContainer = document.getElementById("message-container");
const userInput = document.querySelector(".user-input");
const userSubmit = document.querySelector(".user-submit");

// Send message to GPT-3
userSubmit.addEventListener("click", function () {
    // Fetch response from GPT-3
    fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            prompt: userInput.value,
            max_tokens: 100,
            logprobs: 0,
            engine: 'davinci-playground'
        })
    })
    .then(response => response.json())
    .then(data => {
        // Create message element
        const messageElement = document.createElement("div");
        messageElement.className = "bot-response";
        messageElement.innerText = data.choices[0].text;
        messageContainer.appendChild(messageElement);
        userInput.value = "";
    })
});