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
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid", "barn", "farmzoid", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open"],
    ["open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "empty plot", "open", "open", "open", "open", "open", "open", "open", "open", "farmzoid", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open", "open"],
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
                else if(farm[i][j] == "farmzoid")
                {
                    fill('Grey');
                }
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
    background('SaddleBrown')
    draw_farm( 20, 50);

}


//------------------------------------------------------------FARM LOGIC

var farmDayCounter = 0;

function incrementDate()
{
    farmDayCounter++;
    console.log("Day = " + farmDayCounter);
    $("#dayCount").html(farmDayCounter);
}

