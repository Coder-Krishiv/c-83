var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(screen.width<992){
        document.getElementById("myCanvas").width=screen.width-70;
        document.getElementById("myCanvas").height=screen.height-300;
        document.body.style.overflow="hidden";        
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       
        colour = document.getElementById("colour").value;
        width_of_line = document.getElementById("width_of_line").value;
     last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
     last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

     touchEvent = "touchstart";
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
function clear_screen(){
 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);   
}