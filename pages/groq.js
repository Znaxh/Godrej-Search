const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: "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" });

async function main() {
    const completion = await groq.chat.completions
        .create({
            messages: [
                {
                    role: "user",
                    content: `${text} Summarize this text in 20 words`,
                },
            ],
            model: "mixtral-8x7b-32768",
        })
        .then((chatCompletion) => {
            console.log(chatCompletion.choices[0]?.message?.content || "");
        });
}

main();
