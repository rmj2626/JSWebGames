window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
    var count = 0;
    var t = Date.now();
    var speed = 25;

    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    //let but = document.getElementById("click");

    document.onkeydown = function() {
        //for taking input on computers
        count++;
        y -= 25;
        speed = 25; // Reset speed when jumping

        function draw() {
            var timePassed = (Date.now() - t) / 1000;
            t = Date.now();

            if (y <= 350) {
                speed += 50 * timePassed;
                y += speed * timePassed;
            }

            context.clearRect(0, 0, 600, 400);

            context.beginPath();
            context.arc(x, y, 50, 0, 2 * Math.PI);
            context.fillStyle = "red";
            context.fill();

            context.font = "24px Impact";
            context.fillStyle = "white";
            context.fillText("Count: " + count, 20, 30);

            if (y > 350) {
                count = 0; // Reset the score when the ball hits the ground
            }

            window.requestAnimationFrame(draw);
        }
        draw();
    }

    document.ontouchstart = function() {
        //for taking input on touchscreens
        count++;
        y -= 25;
        speed = 25; // Reset speed when jumping

        function draw() {
            var timePassed = (Date.now() - t) / 1000;
            t = Date.now();

            if (y <= 350) {
                speed += 50 * timePassed;
                y += speed * timePassed;
            }

            context.clearRect(0, 0, 600, 400);

            context.beginPath();
            context.arc(x, y, 50, 0, 2 * Math.PI);
            context.fillStyle = "red";
            context.fill();

            context.font = "24px Impact";
            context.fillStyle = "white";
            context.fillText("Count: " + count, 20, 30);

            if (y > 350) {
                count = 0; // Reset the score when the ball hits the ground
            }

            window.requestAnimationFrame(draw);
        }
        draw();
    }
}