// const phrases = ["you will have a great day", "maybe tomorrow will be better"]
const num = Math.floor(Math.random()* 3)
function messageGenerator() {
switch (num) {
        case 1:
                console.log("try agin")
        
        break;
        case 2:
                console.log("youre getting better")
        default:
                console.log('fuck this shit')
        
}
}
        


console.log(messageGenerator())