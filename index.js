//initial farm setup
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


//draw functions

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
                    fill('Red');
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
                    fill('Green');
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


//------------------------------------------------------------FARM LOGIC

var farmDayCounter = 0;

var farmzoid1_goto = [];
var farmzoid2_goto = [];
var farmzoid3_goto = [];
var farmzoid4_goto = [];

function addToFarmZoidGoTo(farmzoidNum, x, y)
{
    var point = [x,y];
    switch(farmzoidNum)
    {
        case 1:
            farmzoid1_goto.push(point);
            break;
        case 2:
            farmzoid2_goto.push(point);
            break;
        case 3:
            farmzoid3_goto.push(point);
            break;
        case 4:
            farmzoid4_goto.push(point);
            break;
    }
}

function printGoTo(farmzoidNum)
{
    var arr, s = "";

    switch(farmzoidNum)
    {
        case 1:
            arr = farmzoid1_goto;
            s += "Farmzoid 1 Places To Go = "
            break;
        case 2:
            arr = farmzoid2_goto;
            s += "Farmzoid 2 Places To Go = "
            break;
        case 3:
            arr = farmzoid3_goto;
            s += "Farmzoid 3 Places To Go = "
            break;
        case 4:
            arr = farmzoid4_goto;
            s += "Farmzoid 4 Places To Go = "
            break;
    }
    for(var i=0; i < arr.length; i++)
    {
        s += "[" + arr[i][0] + ", " + arr[i][1] + "] ";
    }
    console.log(s);
}

function incrementDate()
{
    farmDayCounter++;
    console.log("Day = " + farmDayCounter);
    $("#dayCount").html(farmDayCounter);
}

function whatToDo(weather)
{
    console.log("The weather passed in is: " + weather);
    if(weather == "Sunny")
    {
       

    }

}


function showFarm()
{
    for(var i=0; i < 40; i++)
    {
         var str = "";
        for(var j=0; j < 40; j++)
        {
            if(farm[i][j] == "open")
            {
                str += "-,";
            }
            else
            {
                str += farm[i][j] + ",";
            }
        }
        console.log(str);
    }
}

//-------------------------------------------------DRAW LOGIC
/*

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        farm[farmzoid1Pos[0]][farmzoid1Pos[1]]= "open";
        farmzoid1Pos[0] += 1;
        farmzoid1Pos[1] += 1;
        farm[farmzoid1Pos[0]][farmzoid1Pos[1]]= "farmzoid1";
        console.log( "g_frame_cnt = " + g_frame_cnt );
        draw_update();
    }
}

function draw_update()  // Update our display.
{
    console.log( "Call draw_farm" );
    draw_farm(20,50)
}
*/

