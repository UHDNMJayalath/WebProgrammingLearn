
            var start = 0;  // Start time initialized

            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function shapeAppear() {
                var top = Math.random() * 400;
                var left = Math.random() * 400;
                var width = Math.random() * 100 + 50;  // Ensure minimum size 50px

                var shape = document.getElementById("shape");

                shape.style.borderRadius = (Math.random() > 0.5) ? "50%" : "0%";
                shape.style.height = width + "px";
                shape.style.width = width + "px";
                shape.style.top = top + "px";
                shape.style.left = left + "px";  // Fixed left positioning
                shape.style.backgroundColor = getRandomColor();
                shape.style.display = "block";

                start = new Date().getTime(); // Reset start time for new shape
            }

            function shapeAppearDelay() {
                setTimeout(shapeAppear, Math.random() * 1500);
            }

            shapeAppearDelay();  // Start the game

            document.getElementById("shape").onclick = function () {
                var end = new Date().getTime();
                var timeTaken = (end - start) / 1000; // Calculate time for current click

                document.getElementById("time").innerHTML = timeTaken.toFixed(3) + "s"; // Show time for each click
                document.getElementById("shape").style.display = "none";

                shapeAppearDelay(); // Restart game with a new shape
            }