   function sendMessage() {
       var userInput = document.getElementById("userInput").value;
       if (userInput.trim() === "") return;

       var messagesDiv = document.getElementById("messages");
       var userMessage = document.createElement("div");
       userMessage.textContent = "You: " + userInput;
       messagesDiv.appendChild(userMessage);

       document.getElementById("userInput").value = "";

       // Simulate a bot response
       setTimeout(function() {
           var botMessage = document.createElement("div");
           botMessage.textContent = "Bot: " + getBotResponse(userInput);
           messagesDiv.appendChild(botMessage);
           messagesDiv.scrollTop = messagesDiv.scrollHeight;
       }, 1000);
   }

   function getBotResponse(input) {
       // Simple predefined responses
       var responses = {
           "hello": "Hi there!",
           "how are you": "I'm a bot, so I'm always good!",
           "bye": "Goodbye!"
       };

       input = input.toLowerCase();
       return responses[input] || "I don't understand that.";
   }