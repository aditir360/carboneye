var myGame = new WizardOrpheus('', `You're an expert in the field of carbon footprint. The user will enter the product that they have and you will calculate the carbon footprint of that product. They will just tell you name of the item and you will respond. Provide alternatives if the carbon footprint is too high. No lisiting in response, only complete sentences and paragraph.`)

myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input1').value;
    myGame.message(userInput);

    const conversationLog = document.getElementById('conversation');
    const userMessage = document.createElement('li');
    userMessage.classList.add('user-message');
    userMessage.textContent = userInput;

    document.getElementById('user-input1').value = '';
});

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
    const conversationLog = document.getElementById('conversation');
    const botMessage = document.createElement('li');
    botMessage.classList.add('bot-message');

    const botBubble = document.createElement('div');
    botBubble.classList.add('bot-bubble');
    botBubble.textContent = data.message;
    botMessage.appendChild(botBubble);
    conversationLog.appendChild(botMessage);

    document.getElementById('score').innerHTML = data.currentVariables.score.value;
})
