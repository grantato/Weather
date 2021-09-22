let info;
let path="http://api.openweathermap.org/data/2.5/weather?q=";
let key="&APPID=8e218db66255bae96c2bcabc84278fdb";
let units="&units=metric";
var input;
var icon;
var city;
var flag=0; 

//let info={};


function setup() {
    print('setup');
    createCanvas(600,400);
//    stroke(55,55,55);
    background(55,55,55);
    var button=select('#submit');
    button.mousePressed(weatherAsk);
    
    input = select('#city');
    textSize(40);

    
    icon = createImage(66, 66);
    icon.loadPixels();
    for (var i = 0; i < icon.width; i++) {
      for (var j = 0; j < icon.height; j++) {
        icon.set(i, j, color(62, 62, 62));
      }
    }
    icon.updatePixels();
    image(icon, 175, 140);
    
}

function keyPressed() {
  if (keyCode === ENTER) {
      weatherAsk();
      print("ENTER");
        }
}

function weatherAsk(){
    var url =  path + input.value() + key + units;
    city = input.value();
    print("weatherASK");
    loadJSON(url, gotData);
//    fill(100);
//    rect(0,0,width,height);

}

function gotData(data){
    print('goDATA');
    info=data;
    flag=1; 
    
    
//    icon = createImage(66, 66);
//    icon.loadPixels();
//    for (var i = 0; i < icon.width; i++) {
//      for (var j = 0; j < icon.height; j++) {
//        icon.set(i, j, color(0, 90, 102));
//      }
//    }
//    icon.updatePixels();
//    image(icon, 190, 200);
    

}
    

function draw() {

    if (flag == 1) {
            background(55,55,55);

//        print('flag=1');
//        }        

    
    if (info){
            let t=info.main.temp;
            let humid=info.main.humidity;
            let desc=info.weather[0].description;
            let iconcode = info.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            textSize(28);
            textStyle(BOLD);
            fill(255, 250, 0);
            text(city, width/3, 100);
            icon = createImg(iconurl);
            icon.position(190, 200);
            icon.size(50, 50);
    
            fill(255);
            textSize(17);
            textStyle(NORMAL);    
            text(desc, 280, 180);
            text("The temperature in "+city+" is "+str(t)+" degrees Celsius, ", 100, 300);
            text("and the humidity is  "+str(humid)+"%", 100, 320);
            flag=0;
            print('flag=0');
    }
    }
    
            icon = createImage(66, 66);
            icon.loadPixels();
            for (var i = 0; i < icon.width; i++) {
              for (var j = 0; j < icon.height; j++) {
                icon.set(i, j, color(62, 62, 62));
              }
            }
            icon.updatePixels();
            image(icon, 175, 140); 
}
    
