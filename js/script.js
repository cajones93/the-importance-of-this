$(document).ready(function() {
    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];

        // If object is already red, turn it black.

        if ($(this).css("background-color") == "rgb(255, 0, 0)"){
            $("." + className).css("background-color", "black");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});