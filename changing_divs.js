$(document).ready(function(){
    $('#1').click(function(){
    	onclickChange(":first", ":nth-child(2)", ":nth-child(3)", "layer1", "layer2", "layer3");
    })
    $('#2').click(function(){
    	onclickChange(":nth-child(2)", ":first", ":nth-child(3)", "layer2", "layer3", "layer1");
    })
    $('#3').click(function(){
		onclickChange(":nth-child(3)", ":first", ":nth-child(2)", "layer3", "layer2", "layer1");
    })
    $('#planeIndex').click(function(){
    	onclickChange(":nth-child(2)", ":first", ":nth-child(3)", "layer2", "layer3", "layer1");
    })
    $('#planeAbout').click(function(){
		onclickChange(":nth-child(3)", ":first", ":nth-child(2)", "layer3", "layer2", "layer1");
    })
    $('#planeInterest').click(function(){
    	onclickChange(":first", ":nth-child(2)", ":nth-child(3)", "layer1", "layer2", "layer3");
    })
    
	function onclickChange (clicked, reduceFocus1, reduceFocus2, showlayer, hidelayer1, hidelayer2) { 
	//button's original style
    	var c1 = $("#footer").children(":first").children(clicked).children(":first").children(":first")
    		.attr("class");
	var c2 = $("#footer").children(":first").children(reduceFocus1).children(":first").children(":first")
		.attr("class");
	var c3 = $("#footer").children(":first").children(reduceFocus2).children(":first").children(":first")
		.attr("class");

	//change style depending on which button is clicked
	if (!$("#footer").children(":first").children(clicked).children(":first").children(":first")
		.hasClass('circleSolid')) {
		$("#footer").children(":first").children(clicked.children(":first").children(":first")
			.removeClass(c1).addClass('circleSolid');
		}

	$("#footer").children(":first").children(reduceFocus1).children(":first").children(":first").removeClass(c2)
		.addClass('circleA');
	$("#footer").children(":first").children(reduceFocus2).children(":first").children(":first").removeClass(c3)
		.addClass('circleB');

	document.getElementById(showlayer).style.display = "block";  //specify which layers to hide and display
   	document.getElementById(hidelayer1).style.display = "none";
   	document.getElementById(hidelayer2).style.display = "none";
	}
});
