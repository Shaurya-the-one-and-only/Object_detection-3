object="";

function back()
{
    window.location = "index.html";
}


function tv()
{
    window.location = "tv.html";
}

function bottle()
{
    window.location = "bottle.html";
}

function phone()
{
    window.location = "phone.html";
}

function tv()
{
    window.location = "tv.html";
}

function lamp()
{
    window.location = "lamp.html";
}



function preload()
{
    phone = loadImage("phone.webp");
    lamp = loadImage("lamp.jpg");
    tv = loadImage("tv.jpg");
    tv = loadImage("tv.jpg");
    bottle = loadImage("bottle.jpg");
}

function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function draw() {
    image(tv, 0, 0, 480, 480);
    if(status !="")
    {
        r = random(255);
        g = random (255);
        b = random(255);

        objectDetector.detect(tv, gotResult);
        for (i = 0; i<objects.length; i++)
        {

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(tv, gotResult);
}

function gotResult(error, results) 
{
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

