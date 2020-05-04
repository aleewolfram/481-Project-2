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
        // if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( x, 0, x, height );
        strokeWeight( 1 );
    }
    for (var y = 0; y < height; y += rminor)
    {
        let big_linep = (y % rmajor == 0);
        let line_wgt = 1;
        // if (big_linep) line_wgt = 2;
        strokeWeight( line_wgt );
        line( 0, y, width, y );
        strokeWeight( 1 );
    }

    //Draw the barn
    fill('Red')
    rect(35 * size , 9 * size, size, size)

    //Draw the plots
    fill('SandyBrown')
    rect(10 * size, 5 * size, size, size)
    rect(10 * size, 8 * size, size, size) 
    rect(10 * size, 11 * size, size, size) 
    rect(10 * size, 14 * size, size, size)

    rect(13 * size, 5 * size, size, size)
    rect(13 * size, 8 * size, size, size) 
    rect(13 * size, 11 * size, size, size) 
    rect(13 * size, 14 * size, size, size) 

    rect(16 * size, 5 * size, size, size) 
    rect(16 * size, 8 * size, size, size) 
    rect(16 * size, 11 * size, size, size)
    rect(16 * size, 14 * size, size, size) 

    rect(19 * size, 5 * size, size, size)
    rect(19 * size, 8 * size, size, size) 
    rect(19 * size, 11 * size, size, size) 
    rect(19 * size, 14 * size, size, size) 

    rect(22 * size, 5 * size, size, size) 
    rect(22 * size, 8 * size, size, size) 
    rect(22 * size, 11 * size, size, size) 
    rect(22 * size, 14 * size, size, size) 


    //Draw the river
    fill('Blue');
    var y = 25
    for(var x = 1; x <= 15; x += 1)
    {
        if(x < 16 && y < 39)
        {
            rect(x*size, y*size, size, size);
            rect((x + 1)*size, y*size, size, size)
            y += 1;
        }
    }

    //Draw the bridges
    fill('SaddleBrown')
    rect(6*size, 30*size, size, size)
    rect(7*size, 30*size, size, size)
    rect(11*size, 35*size, size, size)
    rect(12*size, 35*size, size, size)

    //Draw the cave
    fill('Black')
    for(var x = 14; x < 19; x += 1)
    {
        for(var y = 26; y < 30; y += 1)
        {
            rect(x * size, y * size, size, size)
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

$("#weather").change(function(){
  alert("The text has been changed.");
});