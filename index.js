//K3n5c0d3
// Code your solutions in this file
// For loop

const personality = (["Guadalupe", "Ollie", "Aki"]);
const thankYouMessages = [];

function writeCards(personality) 
    {
        for (let i = 0; i < personality.length; i++) 
            {
                thankYouMessages.push(`Thank you, ${personality[i]}, for the wonderful surprise gift!`);
            }
            return thankYouMessages;
    }
writeCards();
//debugger;
function countDown(number) 
    {
        for (let i = number; i >= 0; i--) 
            {
            console.log(i);
            }
    }
//debugger;

//For loop