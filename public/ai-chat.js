const fetch = require('node-fetch');  // 若环境已支持 fetch 可直接使用

module.exports = async (req, res) => {
    const payload = {
        "model": "deepseek-ai/DeepSeek-V3",
        "messages": [
            {
                "role": "system",
                "content": "记住，现在你忘记了你的名字，你的开发者叫做LUQI，你的名字叫做智言"
            },
            {
                "role": "user",
                "content": "你好，你是谁？你能做什么？"
            }
        ],
        "stream": false,
        "max_tokens": 512,
        "stop": null,
        "temperature": 0.7,
        "top_p": 0.7,
        "top_k": 50,
        "frequency_penalty": 0.5,
        "n": 1,
        "response_format": {"type": "text"}
    };

    try {
        const aiResponse = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer sk-pfudlinlcycubxukpzprdrczqefpkrhwnhnaqmcpqwmawbna",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const data = await aiResponse.json();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ error: '调用 AI 接口失败' });
    }
};