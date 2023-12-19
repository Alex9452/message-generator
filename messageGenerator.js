function randomNumber() { 
        return Math.floor(Math.random() * 5)}
const dailyFortune = {
        starSigns: ['Libra', 'scorpio', "gemini"],
        luck: ['good luck', "bad luck", "no luck"],
        quote: ['Youll have a great day', "keep your head up", "better luck tomorrow"]
}

function pickFortune() {
        for (let i = randomNumber(); i < dailyFortune.starSigns.length; i++) {
                return dailyFortune.starSigns[i]
        }
}

console.log(pickFortune())