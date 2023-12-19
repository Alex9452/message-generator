function randomNumber(num) { 
        return Math.floor(Math.random() * num)}
const dailyFortune = {
        starSigns: ['Libra', 'Scorpio', "Gemini"],
        luck: ['good luck', "bad luck", "no luck"],
        quote: ['Youll have a great day', "keep your head up"]
}

let fortune = []

for (subj in dailyFortune) {
        let answer = randomNumber(dailyFortune[subj].length)

        switch(subj) {
                case 'starSigns':
                        fortune.push(`your sign is ${dailyFortune[subj][answer]}`)
                break;
                case 'luck':
                        fortune.push(`Your luck today is ${dailyFortune[subj][answer]}`)
                break;
                case 'quote':
                        fortune.push(`your quote for the day is ${dailyFortune[subj][answer]}`)
                break;
                default:
                        fortune.push("Not enough information")  

        }


}
function formatFuture(future){
const format = future.join("\n")
console.log(format)}

formatFuture(fortune)