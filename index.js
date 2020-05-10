//------------------------------------------------------------INITIAL FARM SETUP
let farm = [
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open","empty plot", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid1", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid2", "barn", "farmzoid3", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid4", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "cave", "cave", "cave", "cave", "cave", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "cave", "cave", "cave", "cave", "cave", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "cave", "cave", "cave", "cave", "cave", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "cave", "cave", "cave", "cave", "cave", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "river", "river", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"]
];

//arrays to hold the locations for easy locating
var plots = [];
var river = [];
var barn = [];
var cave = [];
let farmzoid1Pos = [18,19];
let farmzoid2Pos = [19,18];
let farmzoid3Pos = [19,20];
let farmzoid4Pos = [20,19];

let farmzoid1Path = [];
let farmzoid2Path = [];
let farmzoid3Path = [];
let farmzoid4Path = [];

var farmzoid1_goto = [];
var farmzoid2_goto = [];
var farmzoid3_goto = [];
var farmzoid4_goto = [];

var farmzoid1_checkoffspots = [];
var farmzoid2_checkoffspots = [];
var farmzoid3_checkoffspots = [];
var farmzoid4_checkoffspots = [];

//initial values for counters
var farmDayCounter = 0;
var fruitHarvestedTotal = 0;

//initializing arrays to hold the locations for easy locating
for(var i=0; i < 40; i++)
    {
        for(var j=0; j < 40; j++)
        {
        //intialize arrays based on initial farm
            if(farm[i][j] != "open")
            {
                if(farm[i][j] == "empty plot")
                {
                    var plot = [i, j];
                    plots.push(plot);
                }
                else if(farm[i][j] == "river")
                {
                    var water = [i, j];
                    river.push(water);
                }
                else if(farm[i][j] == "cave")
                {
                    var mine = [i, j];
                    cave.push(mine);
                }
                else if(farm[i][j] == "barn")
                {
                    var barnspot = [i, j];
                    barn.push(barnspot);
                }
            }
        }
    }


//------------------------------------------------------------FARM LOGIC

//holds the weather for the day
var weather = "";

//used by lisp to set the go to locations for each farmzoid
function addToFarmZoidGoTo(farmzoidNum, x, y)
{
    var point = [x,y];
    switch(farmzoidNum)
    {
        case 1:
            farmzoid1_goto.push(point);
            if(x != 18 && y != 19)
            {
                farmzoid1_checkoffspots.push(point);
            }
            break;
        case 2:
            farmzoid2_goto.push(point);
            if(x != 19 && y != 18)
            {
                farmzoid2_checkoffspots.push(point);
            }
            break;
        case 3:
            farmzoid3_goto.push(point);
            if(x != 19 && y != 20)
            {
                farmzoid3_checkoffspots.push(point);
            }
            break;
        case 4:
            farmzoid4_goto.push(point);
            if(x != 20 && y != 19)
            {
                farmzoid4_checkoffspots.push(point);
            }
            break;
    }
}

function incrementDate()
{
    farmDayCounter++;
    console.log("DAY " + farmDayCounter);
    $("#dayCount").html(farmDayCounter);
}

//call this each time plot is visited and pass in the plot
function advanceStage(farmzoidNum,x,y)
{
    if(farm[x][y] == "empty plot")
    {
        console.log("Farmzoid" + farmzoidNum + " is planting a seed.")
        farm[x][y] = "seed1"
    }
    else if (farm[x][y] == "seed1")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "stalk2"
        }
    }
    else if (farm[x][y] == "stalk2")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "stalk3"
        }
    }
    else if (farm[x][y] == "stalk3")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "stalk4"
        }
    }
    else if (farm[x][y] == "stalk4")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush5"
        }
    }
    else if (farm[x][y] == "bush5")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush6"
        }
    }
    else if (farm[x][y] == "bush6")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush7"
        }
    }
    else if (farm[x][y] == "bush7")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush8"
        }
    }
    else if (farm[x][y] == "bush8")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush9"
        }
    }
    else if (farm[x][y] == "bush9")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "bush10"
        }
    }
    else if (farm[x][y] == "bush10")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "flower11"
        }
    }
    else if (farm[x][y] == "flower11")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
        farm[x][y] = "flower12"
        }
    }
    else if (farm[x][y] == "flower12")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "flower13"
        }
    }
    else if (farm[x][y] == "flower13")
    {
        console.log("Farmzoid" + farmzoidNum + " is watering a plant.")
        if(weather != "Cloudy")
        {
            farm[x][y] = "fruit14"
        }
    }
    else if (farm[x][y] == "fruit14")
    {
        console.log("Farmzoid" + farmzoidNum + " is picking a fruit.")
        farm[x][y] = "empty plot"
        fruitHarvestedTotal++;
        $("#fruitHarvested").html(fruitHarvestedTotal);
    }
    else if (farm[x][y] == "fruit15")
    {
        console.log("Farmzoid" + farmzoidNum + " is picking a fruit.")
        farm[x][y] = "empty plot"
        fruitHarvestedTotal++;
        $("#fruitHarvested").html(fruitHarvestedTotal);
    }
    else if (farm[x][y] == "fruit16")
    {
        console.log("Farmzoid" + farmzoidNum + " is picking a fruit.")
        farm[x][y] = "empty plot"
        fruitHarvestedTotal++;
        $("#fruitHarvested").html(fruitHarvestedTotal);
    }
}

function waterAll()
{
     for(var x=0; x < 40; x++)
    {
        for(var y=0; y < 40; y++)
        {

    if (farm[x][y] == "seed1")
    {
        farm[x][y] = "stalk2"
    }
    else if (farm[x][y] == "stalk2")
    {
        farm[x][y] = "stalk3"
    }
    else if (farm[x][y] == "stalk3")
    {
        farm[x][y] = "stalk4"
    }
    else if (farm[x][y] == "stalk4")
    {
        farm[x][y] = "bush5"
    }
    else if (farm[x][y] == "bush5")
    {
        farm[x][y] = "bush6"
    }
    else if (farm[x][y] == "bush6")
    {
        farm[x][y] = "bush7"
    }
    else if (farm[x][y] == "bush7")
    {
        farm[x][y] = "bush8"
    }
    else if (farm[x][y] == "bush8")
    {
        farm[x][y] = "bush9"
    }
    else if (farm[x][y] == "bush9")
    {
        farm[x][y] = "bush10"
    }
    else if (farm[x][y] == "bush10")
    {
        farm[x][y] = "flower11"
    }
    else if (farm[x][y] == "flower11")
    {
        farm[x][y] = "flower12"
    }
    else if (farm[x][y] == "flower12")
    {
        farm[x][y] = "flower13"
    }
    else if (farm[x][y] == "flower13")
    {
        farm[x][y] = "fruit14"
    }
    else if (farm[x][y] == "fruit14")
    {
        farm[x][y] = "fruit15"
    }
    else if (farm[x][y] == "fruit15")
    {
        farm[x][y] = "fruit16"
    }
    else if (farm[x][y] == "fruit16")
    {
        farm[x][y] = "empty plot"
    }
        }
    }

}

//-------------------------------------------------DRAW LOGIC

var drawit = false;

function draw_farm( rminor, rmajor)
{
    stroke( "Chocolate" );
    fill( "Chocolate" );
    let size = g_canvas.cell_size;
    let width = g_canvas.wid*size;
    let height = g_canvas.hgt*size;
    let zz = size - 2;
    for (var x = 0; x < width; x += rminor)
    {
        let big_linep = (x % rmajor == 0);
        let line_wgt = 1;
        strokeWeight( line_wgt );
        line( x, 0, x, height );
        strokeWeight( 1 );
    }
    for (var y = 0; y < height; y += rminor)
    {
        let big_linep = (y % rmajor == 0);
        let line_wgt = 1;
        strokeWeight( line_wgt );
        line( 0, y, width, y );
        strokeWeight( 1 );
    }

    for(var i=0; i < 40; i++)
    {
        for(var j=0; j < 40; j++)
        {
        //intialize plots with corresponding color based on initial farm
            if(farm[i][j] != "open")
            {
                if(farm[i][j] == "empty plot")
                {
                    fill('Chocolate');
                }
                else if(farm[i][j] == "seed1")
                {
                    fill('SandyBrown');
                }
                else if(farm[i][j] == "stalk2" || farm[i][j] == "stalk3" || farm[i][j] == "stalk4")
                {
                    fill('MediumSeaGreen');
                }
                else if(farm[i][j] == "bush5" || farm[i][j] == "bush6" || farm[i][j] == "bush7" || farm[i][j] == "bush8" || farm[i][j] == "bush9" || farm[i][j] == "bush10")
                {
                    fill('Green');
                }
                else if(farm[i][j] == "flower11" || farm[i][j] == "flower12" || farm[i][j] == "flower13")
                {
                    fill('Pink');
                }
                else if(farm[i][j] == "fruit14" || farm[i][j] == "fruit15" || farm[i][j] == "fruit16")
                {
                    fill('Red');
                }
                else if(farm[i][j] == "river")
                {
                    fill('Blue');
                }
                else if(farm[i][j] == "cave")
                {
                    fill('Black');
                }
                else if(farm[i][j] == "barn")
                {
                    fill('DarkRed');
                }
                else if(farm[i][j] == "farmzoid1")
                {
                    fill('Purple');
                }
                else if(farm[i][j] == "farmzoid2")
                {
                    fill('Yellow');
                }
                else if(farm[i][j] == "farmzoid3")
                {
                    fill('Aqua');
                }
                else if(farm[i][j] == "farmzoid4")
                {
                    fill('PaleVioletRed');
                }
                rect(j * size, i * size, size, size)
            }
            else
            {
              fill('Saddlebrown');
              rect(j * size, i * size, size, size)
            }
        }
    }
}

function setup() // P5 Setup Fcn
{
    g_canvas = { cell_size:20, wid:40, hgt:40 };
    g_frame_cnt = 0; // Setup a P5 display-frame counter to do the animation.
    g_frame_mod = 24; // Update 'mod' frames.
    g_stop = 0; // Go by default.

    let size = g_canvas.cell_size;
    let width = size * g_canvas.wid;
    let height = size * g_canvas.hgt;
    g_cnv = createCanvas( width, height );
    draw_farm( 20, 50);
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    if(drawit)
    {
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        //check each if position isn't undefined to make sure it isn't at the end of its journey
        if(farmzoid1Pos != undefined)
        {
            farm[farmzoid1Pos[0]][farmzoid1Pos[1]] = "open";
        }
        //move to next path location
        farmzoid1Pos = farmzoid1Path.shift();
        if(farmzoid1Pos != undefined)
        {
            farm[farmzoid1Pos[0]][farmzoid1Pos[1]] = "farmzoid1";
        }
        if(farmzoid1Pos != undefined)
        {
        //check if bot has neared the spot it needs to tend to
        var x=farmzoid1Pos[0],y=farmzoid1Pos[1];
        if(isInArray(farmzoid1_checkoffspots,x-1,y))
        {
            advanceStage(1,x-1,y);
            farmzoid1_checkoffspots = removeFromArray(farmzoid1_checkoffspots,x-1,y);
        }
        else if(isInArray(farmzoid1_checkoffspots,x+1,y))
        {
            advanceStage(1,x+1,y);
            farmzoid1_checkoffspots = removeFromArray(farmzoid1_checkoffspots,x+1,y);

        }
        else if(isInArray(farmzoid1_checkoffspots,x,y-1))
        {
            advanceStage(1,x,y-1);
            farmzoid1_checkoffspots = removeFromArray(farmzoid1_checkoffspots,x,y-1);
        }
        else if(isInArray(farmzoid1_checkoffspots,x,y+1))
        {
            advanceStage(1,x,y+1);
            farmzoid1_checkoffspots = removeFromArray(farmzoid1_checkoffspots,x,y+1);
        }
        else if (isInArray(farmzoid1_checkoffspots,x,y))
        {
            advanceStage(1,x,y);
            farmzoid1_checkoffspots = removeFromArray(farmzoid1_checkoffspots,x,y);
        }

        }
        if(farmzoid1Pos == undefined)
        {
             farm[18][19] = "farmzoid1";
        }



        //check each if position isn't undefined to make sure it isn't at the end of its journey
        if(farmzoid2Pos != undefined)
        {
            farm[farmzoid2Pos[0]][farmzoid2Pos[1]] = "open";
        }
        //move to next path location
        farmzoid2Pos = farmzoid2Path.shift();
        if(farmzoid2Pos != undefined)
        {
            farm[farmzoid2Pos[0]][farmzoid2Pos[1]] = "farmzoid2";
        }
        if(farmzoid2Pos != undefined)
        {
        //check if bot has neared the spot it needs to tend to
        var x=farmzoid2Pos[0],y=farmzoid2Pos[1];
        if(isInArray(farmzoid2_checkoffspots,x-1,y))
        {
            advanceStage(2,x-1,y);
            farmzoid2_checkoffspots = removeFromArray(farmzoid2_checkoffspots,x-1,y);
        }
        else if(isInArray(farmzoid2_checkoffspots,x+1,y))
        {
            advanceStage(2,x+1,y);
            farmzoid2_checkoffspots = removeFromArray(farmzoid2_checkoffspots,x+1,y);

        }
        else if(isInArray(farmzoid2_checkoffspots,x,y-1))
        {
            advanceStage(2,x,y-1);
            farmzoid2_checkoffspots = removeFromArray(farmzoid2_checkoffspots,x,y-1);
        }
        else if(isInArray(farmzoid2_checkoffspots,x,y+1))
        {
            advanceStage(2,x,y+1);
            farmzoid2_checkoffspots = removeFromArray(farmzoid2_checkoffspots,x,y+1);
        }
        else if (isInArray(farmzoid2_checkoffspots,x,y))
        {
            advanceStage(2,x,y);
            farmzoid2_checkoffspots = removeFromArray(farmzoid2_checkoffspots,x,y);
        }

        }
        if(farmzoid2Pos == undefined)
        {
             farm[19][18] = "farmzoid2";
        }



        //check each if position isn't undefined to make sure it isn't at the end of its journey
        if(farmzoid3Pos != undefined)
        {
            farm[farmzoid3Pos[0]][farmzoid3Pos[1]] = "open";
        }
        //move to next path location
        farmzoid3Pos = farmzoid3Path.shift();
        if(farmzoid3Pos != undefined)
        {
            farm[farmzoid3Pos[0]][farmzoid3Pos[1]] = "farmzoid3";
        }
        if(farmzoid3Pos != undefined)
        {
        //check if bot has neared the spot it needs to tend to
        var x=farmzoid3Pos[0],y=farmzoid3Pos[1];
        if(isInArray(farmzoid3_checkoffspots,x-1,y))
        {
            advanceStage(3,x-1,y);
            farmzoid3_checkoffspots = removeFromArray(farmzoid3_checkoffspots,x-1,y);
        }
        else if(isInArray(farmzoid3_checkoffspots,x+1,y))
        {
            advanceStage(3,x+1,y);
            farmzoid3_checkoffspots = removeFromArray(farmzoid3_checkoffspots,x+1,y);

        }
        else if(isInArray(farmzoid3_checkoffspots,x,y-1))
        {
            advanceStage(3,x,y-1);
            farmzoid3_checkoffspots = removeFromArray(farmzoid3_checkoffspots,x,y-1);
        }
        else if(isInArray(farmzoid3_checkoffspots,x,y+1))
        {
            advanceStage(3,x,y+1);
            farmzoid3_checkoffspots = removeFromArray(farmzoid3_checkoffspots,x,y+1);
        }
        else if (isInArray(farmzoid3_checkoffspots,x,y))
        {
            advanceStage(3,x,y);
            farmzoid3_checkoffspots = removeFromArray(farmzoid3_checkoffspots,x,y);
        }

        }
        if(farmzoid3Pos == undefined)
        {
             farm[19][20] = "farmzoid3";
        }



        //check each if position isn't undefined to make sure it isn't at the end of its journey
        if(farmzoid4Pos != undefined)
        {
            farm[farmzoid4Pos[0]][farmzoid4Pos[1]] = "open";
        }
        //move to next path location
        farmzoid4Pos = farmzoid4Path.shift();
        if(farmzoid4Pos != undefined)
        {
            farm[farmzoid4Pos[0]][farmzoid4Pos[1]] = "farmzoid4";
        }
        if(farmzoid4Pos != undefined)
        {
        //check if bot has neared the spot it needs to tend to
        var x=farmzoid4Pos[0],y=farmzoid4Pos[1];
        if(isInArray(farmzoid4_checkoffspots,x-1,y))
        {
            advanceStage(4,x-1,y);
            farmzoid4_checkoffspots = removeFromArray(farmzoid4_checkoffspots,x-1,y);
        }
        else if(isInArray(farmzoid4_checkoffspots,x+1,y))
        {
            advanceStage(4,x+1,y);
            farmzoid4_checkoffspots = removeFromArray(farmzoid4_checkoffspots,x+1,y);
        }
        else if(isInArray(farmzoid4_checkoffspots,x,y-1))
        {
            advanceStage(4,x,y-1);
            farmzoid4_checkoffspots = removeFromArray(farmzoid4_checkoffspots,x,y-1);
        }
        else if(isInArray(farmzoid4_checkoffspots,x,y+1))
        {
            advanceStage(4,x,y+1);
            farmzoid4_checkoffspots = removeFromArray(farmzoid4_checkoffspots,x,y+1);
        }
        else if (isInArray(farmzoid4_checkoffspots,x,y))
        {
            advanceStage(4,x,y);
            farmzoid4_checkoffspots = removeFromArray(farmzoid4_checkoffspots,x,y);
        }

        }
        if(farmzoid4Pos == undefined)
        {
             farm[20][19] = "farmzoid4";
        }



        //if all bots have completed their journeys set their locations to their homes and progress to the next day
        if(farmzoid1Pos == undefined && farmzoid2Pos == undefined && farmzoid3Pos == undefined && farmzoid4Pos == undefined)
        {
            drawit = false;
            farmzoid1Pos = [18,19];
            farmzoid2Pos = [19,18];
            farmzoid3Pos = [19,20];
            farmzoid4Pos = [20,19];
            if(farmDayCounter < 40)
            {
                document.getElementById("nextDay").click();
            }
            else
            {
                $("#rowView").html('<span class="h4"> All Done! Farm harvested '+ fruitHarvestedTotal + ' fruit total!</span>');
            }
        }

        draw_update();
    }
    }
}

function draw_update()  // Update our display.
{
    draw_farm(20,50)
}

function run_full_path(zoidNum)
{
  let current=[];
  switch (zoidNum)
  {
    case 1: current = farmzoid1Pos;
            while (farmzoid1_goto != undefined && farmzoid1_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid1_goto.shift();
              find_path(1,current,passVar);
              current = farmzoid1Path[farmzoid1Path.length - 1];
            }
            break;

    case 2: current = farmzoid2Pos;
            while (farmzoid2_goto != undefined && farmzoid2_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid2_goto.shift();
              find_path(2,current,passVar);
              current = farmzoid2Path[farmzoid2Path.length - 1];
            }
            break;

    case 3: current = farmzoid3Pos;
            while (farmzoid3_goto != undefined && farmzoid3_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid3_goto.shift();
              find_path(3,current,passVar);
              current = farmzoid3Path[farmzoid3Path.length - 1];
            }
            break;

    case 4: current = farmzoid4Pos;
            while (farmzoid4_goto != undefined && farmzoid4_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid4_goto.shift();
              find_path(4,current,passVar);
              current = farmzoid4Path[farmzoid4Path.length - 1];
            }
            break;

  }
}

//This function calls the function that will find the path between two points
// It will run until paths between all the points a farmzoid must visit are made
function run_full_path(zoidNum)
{
  let current=[];

  //Checks which farmzoid is being referenced
  switch (zoidNum)
  {
    case 1: current = farmzoid1Pos;
            //Loops until all the points a farmzoid must visit are checked
            while (farmzoid1_goto != undefined && farmzoid1_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid1_goto.shift();
              find_path(1,current,passVar);
              current = farmzoid1Path[farmzoid1Path.length - 1];
            }
            break;

    case 2: current = farmzoid2Pos;
            while (farmzoid2_goto != undefined && farmzoid2_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid2_goto.shift();
              find_path(2,current,passVar);
              current = farmzoid2Path[farmzoid2Path.length - 1];
            }
            break;

    case 3: current = farmzoid3Pos;
            while (farmzoid3_goto != undefined && farmzoid3_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid3_goto.shift();
              find_path(3,current,passVar);
              current = farmzoid3Path[farmzoid3Path.length - 1];
            }
            break;

    case 4: current = farmzoid4Pos;
            while (farmzoid4_goto != undefined && farmzoid4_goto.length != 0)
            {
              let passVar = [];
              passVar = farmzoid4_goto.shift();
              find_path(4,current,passVar);
              current = farmzoid4Path[farmzoid4Path.length - 1];
            }
            break;

  }
}

//This function will create a path between a starting and ending point.
// Will add the path to the appropriate farmzoid. Will also call a function
// to help avoid plots of land so the farmzoid does not step on them
function find_path(zoidNum, startPoint, endPoint)
{
  let current = [];
  let tempPath= [];
  current = startPoint;
  let lookAhead = [0,0];

  //Loops until the farmzoid is adjacent to the final point it is going to
  // Calls function neighbors to determine if they are adjacent
  while (!neighbors (current, endPoint))
  {
    let lookAhead = [0,0];

    //The next two if else dontitionals will check if the farmzoid is on the
    // colum or row. If neither is the same, it will make the farmzoid move
    // diagonally.  If either row or colum are equal, it'll move straight
    if (current[0] > endPoint[0])
    {
      lookAhead[0] = current[0] - 1;
    }
    else if (current[0] < endPoint[0])
    {
      lookAhead[0] = current[0] + 1;
    }
    else
    {
      lookAhead[0] = current[0];
    }

    if (current[1] > endPoint[1])
    {
      lookAhead[1] = current[1] - 1;
    }
    else if (current[1] < endPoint[1])
    {
      lookAhead[1] = current[1] + 1;
    }
    else
    {
      lookAhead[1] = current[1];
    }

    //Calls a function to check and see if the spot the farmzoid is going to
    // move to is empty or not. If it is not empty, it'll walk around it.
    // If the farmzoid was planning on walking diagonally, it will choose the
    // correct way to go without adding extra steps
    if (!empty(lookAhead[0],lookAhead[1]))
    {
      if (current[0] == endPoint[0])
      {
        lookAhead[0] = lookAhead[0] + 1;
      }
      else if (current[1] == endPoint[1])
      {
        lookAhead[1] = lookAhead[1] + 1;
      }
      else
      {
        lookAhead = find_closer(current,endPoint)
      }

    }

    //This switch statement will add to the path to the correct farmzoid
    switch(zoidNum)
    {
      case 1:
              farmzoid1Path.push(lookAhead);
              current = lookAhead;
              break;
      case 2:
              farmzoid2Path.push(lookAhead);
              current = lookAhead;
              break;
      case 3:
              farmzoid3Path.push(lookAhead);
              current = lookAhead;
              break;
      case 4:
              farmzoid4Path.push(lookAhead);
              current = lookAhead;
              break;
    }
  }
}

//This function checks to see if the farmzoid is adjacent to the final point
// it is trying to reach.
function neighbors(startPoint, endPoint)
{
  if (abs(startPoint[0] - endPoint[0]) <= 1 && abs(startPoint[1] - endPoint[1]) <= 1)
  {
    return true;
  }
  else {
    {
      return false;
    }
  }
}

//checks to make sure there is not a plot of land or any plants on a given cell
function empty (rowCord, colCord)
{
  if (farm[rowCord][colCord] == "open" || farm[rowCord][colCord] == "farmzoid1" || farm[rowCord][colCord] == "farmzoid2" || farm[rowCord][colCord] == "farmzoid3" || farm[rowCord][colCord] == "farmzoid4")
  {
    return true;
  }
  else
  {
    return false;
  }
}


//the function will be given a start point and an end point. It will give two
// possible options of avoiding an obstacle and then calculate the euclidean
// distance to pick the closer path.
function find_closer(pointA, pointB)
{
  let optionA = [0,0];
  let optionB = [0,0];

  optionA[0] = pointA[0];
  optionA[1] = pointA[1];
  optionB[0] = pointA[0];
  optionB[1] = pointA[1];


  if (pointA[0] < pointB[0] && pointA[1] > pointB[1])
  {
    optionA[1] = pointA[1] - 1;
    optionB[0] = pointB[0] + 1;
  }
  else if (pointA[0] < pointB[0] && pointA[1] < pointB[1])
  {
    optionA[1] = pointA[1] + 1;
    optionB[0] = pointB[0] + 1;
  }
  else if (pointA[0] > pointB[0] && pointA[1] > pointB[1])
  {
    optionA[1] = pointA[1] - 1;
    optionB[0] = pointB[0] - 1;
  }
  else if (pointA[0] > pointB[0] && pointA[1] < pointB[1])
  {
    optionA[1] = pointA[1] + 1;
    optionB[0] = pointB[0] - 1;
  }
  //Calls a helper function that calculates the euclidean distance
  if (distance(optionA,pointB) < distance(optionB,pointB))
  {
    return optionA;
  }
  else
  {
    return optionB;
  }
}

//This function takes two points and calculates the euclidean distance
function distance(pointA, pointB)
{
  xDiff = Math.pow(pointA[1] - pointB[1],2);
  yDiff = Math.pow(pointA[0] - pointB[0],2);

  return Math.sqrt(xDiff + yDiff);
}

function isInArray(arr,x,y)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i][0] == x && arr[i][1] == y)
        {
            return true;
        }
    }

    return false;
}

function removeFromArray(arr,x,y)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i][0] == x && arr[i][1] == y)
        {
            arr.splice(i, 1);
        }
    }

    return arr;
}
