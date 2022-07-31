//variaveis globais
var buni,pou;
var cenoura,grupocenora;
var venom;
var grupovenom;

var score = 0;

var inimigo;
var life;






function preload(){
    pou = loadImage("cueio.png");
    cenoura = loadImage("cenoura.png");
    venom = loadImage("veneno.png");







}







function setup(){
    createCanvas(600,400);
    buni = createSprite(300,380,40,40);
    buni.addImage(pou);
    buni.scale = 0.1;

    grupocenora = new Group();
    grupovenom = new Group();
    

}



function draw(){
    background ("white");
    
    text("pontuacao:" + score,500,20);


    buni.x = World.mouseX;
    
    if (buni.isTouching(grupovenom)){
        buni.visible = false;



    }

    if (buni.isTouching(grupocenora)){
        score = score +1;
        



    }



    bonus();
    vasco();
    drawSprites();
}




function vasco(){
    if (frameCount%50 === 0){
        var inimigo = createSprite(600,30,20,20);
        inimigo.x = random(20,580);
        inimigo.velocityY = 4;
        inimigo.addImage(venom);
        inimigo.scale = 0.1;
        grupovenom.add(inimigo);

        inimigo.lifetime = 100;
    }



}




function bonus(){
    if (frameCount%70 === 0){
        var life = createSprite(600,30,20,20);
        life.x = random(20,580);
        life.velocityY = 5;
        life.addImage(cenoura);
        life.scale = 0.1;
        grupocenora.add(life);
        life.lifetime = 61;
    }



}