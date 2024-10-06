document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('user', message);
            userInput.value = '';
            getAIResponse(message);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getAIResponse(prompt) {
        const apiKey = 'sk-d79737fd6b564b0999fa875551021f91';
        const proxyUrl = 'https://api.codetabs.com/v1/proxy/?quest=';
        const apiUrl = 'https://dashscope.aliyuncs.com/api/v1/apps/a1ba2f10a01e492c82edfff5d2d57c95/completion';

        try {
            const response = await fetch(proxyUrl + apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: {
                        prompt: prompt
                    },
                    parameters: {},
                    debug: {}
                })
            });

            if (!response.ok) {
                throw new Error('API 请求失败');
            }

            const data = await response.json();
            const aiResponse = data.output.text;
            addMessageToChat('ai', aiResponse);
        } catch (error) {
            console.error('错误:', error);
            addMessageToChat('ai', '抱歉,我遇到了一些问题。请稍后再试。');
        }
    }
});