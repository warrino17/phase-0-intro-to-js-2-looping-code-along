function writeCards(names, eventName) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    }
    
    return messages;
    }

function countDown(num) {
    for (let i = num; i >= 0; i--) {
    console.log(i);
    }
}