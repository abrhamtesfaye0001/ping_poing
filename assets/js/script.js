let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

let cx = canvas.width;
let cy = canvas.height;

// c.fillStyle = "green"
// c.fillRect(0,0,10,30)


function announceWinner(winner){
    document.querySelector("p").innerText = `the winner is: ${winner}`
}

class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = "black"
        this.prevx =0;
        this.prevy = 0;
        this.dx = 2.5;
        this.dy = 2.5;
        this.draw()
    }
    isInTouchPlayer(player1){
        if((this.x>=player1.x && this.x<=player1.x+10)&&(this.y>=player1.y && this.y<=player1.y+30)){
             
            return true;
        }
        return false;
    }
    isInTouchBorder(){
        // if((this.x<=0||this.x>=cx-2.5||this.y<=0||this.y>=cy-2.5)){
        //     return true;
        // }
        // return false;

        if(this.x<=0){
            return "left"
        }else{
            if (this.x>=cx-2.5) {
                return "right"
            } else {
                if (this.y<=0) {
                    return "top"
                } else {
                    if (this.y>=cy-2.5) {
                        return "bottom"
                    } else {
                        return "normal"
                    }
                }
                
            }
        }
    }
    isGameOver(){
        if(this.x<=0){
            return -1
        }else{
            if (this.x>=300-2.5) {
                return 1
            }
        }
        return 0
    }
    clear(){
        c.clearRect(this.x-5,this.y-5,10,10)
    }
    draw(){
    
        c.beginPath()
        c.arc(this.x, this.y, 2.5, 0, 2 * Math.PI,true);
        c.fillStyle="red";
        c.fill()
        c.stroke();
    }
    moveXY(){
        this.prevx = this.x;
        this.prevy = this.y;
        this.clear();
        if(this.x<=0||this.x>=cx-2.5) this.dx=-this.dx;
        if(this.y<=0||this.y>=cy-2.5) this.dy=-this.dy;

        if(this.isInTouchPlayer(green)) this.dx=-this.dx;
        if(this.isInTouchPlayer(red)) this.dx=-this.dx,this.y;
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
    moveDeg(){
        var mySetInterval= setInterval(() => {
            if(this.isGameOver()==0){
                this.moveXY();
                red.draw();
                green.draw()
            }else{
                if(this.isGameOver()==-1){
                    clearInterval(mySetInterval)
                    announceWinner("you")
                    
                }
                if(this.isGameOver()==1){
                    clearInterval(mySetInterval)
                    announceWinner(selector[selector.selectedIndex].innerText)///////////////////////////
                }
            }
            
         }, 20);
        
         

    }
    startgame(){
        c.clearRect(0,0,cx,cy)
        this.x = Math.random()*(cx-300)+100
        this.y = Math.random()*(cy-300)+100
        
        this.moveDeg()
        
    }


}



class Rect{
    
    constructor(x,y,color,turf){
        this.turf = turf;
        this.x = x;
        this.y = y;
        this.color = color;
        this.draw()
    }
    clear(){
        c.clearRect(this.x,this.y,10,30)
    }
    draw(){
    c.fillStyle = this.color
    c.fillRect(this.x,this.y,10,30)
    }

    borderControl(){

        if(this.turf=="left"){
            if(this.x<0){
                this.x = 0;
            }
            else{
                if(this.x>cx/2-10){
                    this.x = cx/2-10;
                }
            }
            if(this.y<0){
                this.y = 0;
            }
            else{
                if(this.y>cy-30){
                    this.y = cy-30;
                }
            }
        }
        else{
            if(this.turf=="right"){
                if(this.x<cx/2){
                    this.x = cx/2;
                }
                else{
                    if(this.x>cx-10){
                        this.x = cx-10;
                    }
                }
                if(this.y<0){
                    this.y = 0;
                }
                else{
                    if(this.y>cy-30){
                        this.y = cy-30;
                    }
                }
            }

        }
    }


    moveLeft(){
        this.clear()
        this.x-=5
        this.borderControl()
        this.draw();        
    }
    moveRight(){
        this.clear()
        this.x+=5
        this.borderControl()
        this.draw();        
    }

    moveTop(){
        this.clear()
        this.y-=5
        this.borderControl()
        this.draw();        
    }
    moveBottom(){
        this.clear()
        this.y+=5
        this.borderControl()
        this.draw();        
    }
    moveTo(x,y){
        this.clear()
        this.x=x
        this.y=y
        this.borderControl()
        this.draw()
    }


}
function AI(level){
    speed={
        "easy":100,
        "medium":50,
        "hard":10
    }
    setInterval(() => {
        // red.x = ball.x;
        screenRefresh()
        red.clear()
        red.y = ball.y-5;
        red.borderControl()
        
        red.draw()

    }, speed[level]);
}

function screenRefresh(){
    c.clearRect(0,0,10,cy)
}

var green = new Rect(290,0,"green","right")
var red = new Rect(0,0,"red","left")
var randx = Math.floor(Math.random()*2)+1

var ball = new Ball(0,0);

var selector = document.querySelector("select");



// document.querySelector("button").addEventListener(
//     "click",()=>{
//         console.log("the selected value is "+selector.value)
//         if(selector.value !== "person"){
//             AI(selector.value)
//         }
//         ball.startgame()
//     }
// )

window.addEventListener("keydown",(e)=>{
    if(e.code=="Enter"||e.code=="Space"){
        
        if(selector.value !== "person"){
            AI(selector.value)
        }
        // AI()
        ball.startgame()
    }
    // console.log(e.code)
    switch (e.code) {
        case "ArrowRight":
        case "Numpad6":
            console.log("right clicked");
            green.moveRight()
            break;
        case "ArrowLeft":
        case "Numpad4":
            console.log("left clicked");
            green.moveLeft()
            break;
        case "ArrowDown":
        case "Numpad2":
            console.log("down clicked");
            green.moveBottom()
            break;
        case "ArrowUp":
        case "Numpad8":
            console.log("up clicked");
            green.moveTop()
            break;
        

        default:
            break;
    }
    console.log(e.code)
    switch (e.code) {
        
        case "KeyD":
            console.log("right clicked");
            red.moveRight()
            break;
        
        case "KeyA":
            console.log("left clicked");
            red.moveLeft()
            break;
        
        case "KeyS":
            console.log("down clicked");
            red.moveBottom()
            break;
        
        case "KeyW":
            console.log("up clicked");
            red.moveTop()
            break;
        

        default:
            break;
    }
    // drawRect(e.offsetX,e.offsetY);
    
})

