var face_size = []
var face_x = []
var face_y = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fff3b0")
  angleMode(DEGREES)

  for(var i =0;i<5;i++){

    face_size [i]= random(100,400)
    face_x [i]= random(0,width)
    face_y [i]= random(0,height)
  }
}

function draw() {
  background("#fff3b0")
  fill(0)
  stroke(255)
  strokeWeight(5)
  textSize(50)
  text("X:"+mouseX+"Y:"+mouseY,50,50)

    for(var j =0;j<5;j++){
    push()
    translate(face_x[j],face_y[j])

      fill(0)
      stroke(0)
      ellipse(face_size[j]*11/20,-face_size[j]/4,face_size[j]*3/8)//右包包頭

      fill(0)
      stroke(0)
      ellipse(-face_size[j]*11/20,-face_size[j]/4,face_size[j]*3/8)//左包包頭
      
      noFill()
      stroke(255,0,0)
      strokeWeight(face_size[j]/20)
      arc(face_size[j]/4,-face_size[j]*3/40,face_size[j]/2,face_size[j]/2,300,360)//右髮圈

      noFill()
      stroke(255,0,0)
      strokeWeight(face_size[j]/20)
      arc(-face_size[j]/4,-face_size[j]*3/40,face_size[j]/2,face_size[j]/2,180,240)//左髮圈
      
      strokeWeight(face_size[j]/40)
      fill(0)
      stroke(0)
      ellipse(0,0,face_size[j],face_size[j]*13/16)//大臉

      fill("#ffe8d6")
      stroke(0)
      ellipse(0,face_size[j]/20,face_size[j]*17/20,face_size[j]*7/10)//小臉

      noFill()
      stroke(0)
      if(mouseIsPressed)
      {
        arc(0,face_size[j]/5,face_size[j]*9/60,face_size[j]*9/90,0,180)//嘴
        fill(255,0,0)
        arc(0,face_size[j]/5+face_size[j]/20,face_size[j]*9/80,face_size[j]*9/80,350,190)
      }
      else
      {
        arc(0,face_size[j]/5,face_size[j]*9/80,face_size[j]*9/80,0,180)//嘴
      }
      
      line(-face_size[j]*3/20+map(mouseX,0,width,-10,10),face_size[j]*9/80+map(mouseY,0,height,-10,10),-face_size[j]*7/20+map(mouseX,0,width,-10,10),face_size[j]/20+map(mouseY,0,height,-10,10))//左眼
      line(face_size[j]*3/20+map(mouseX,0,width,-10,10),face_size[j]*9/80+map(mouseY,0,height,-10,10),face_size[j]*7/20+map(mouseX,0,width,-10,10),face_size[j]/20+map(mouseY,0,height,-10,10))//右眼

      noFill()
      stroke(0)
      arc(-face_size[j]/4,0,face_size[j]*3/8,face_size[j]*3/8,240,290)//左眉
      arc(face_size[j]/4,0,face_size[j]*3/8,face_size[j]*3/8,250,300)//右眉

      fill("#f28482")
      noStroke()
      ellipse(-face_size[j]*3/10,face_size[j]/5,face_size[j]/10)//左腮紅
      ellipse(face_size[j]*3/10,face_size[j]/5,face_size[j]/10)//右腮紅

    pop()
    }


} 

var song
var songIsplay=false
var amp
function preload(){
  song = loadSound("PUCCA The suspicious games IN ENGLISH 03x66")
}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()
  }
  else{
    song.pause()
    songIsplay = false
  }
}