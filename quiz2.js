// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)
(function($){
	$('#panel').hide();
	var list = document.getElementById('secondarySection');
	var items = list.getElementsByTagName('li')
	console.log(items);
	//change ol
	for(var i = 0; i < items.length; i++){
    var input=items[i];
 	input.innerHTML='Uniformity, is and always will be the prefered choice for the hive.';
	input.style.color = 'red';
	console.log(input);
}

	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alrt('you just clicked a link, goodjob');
	});

}(jQuery));

//Shows my accordion
function show(){
	if(accCount == 0){
		$('#panel').show();
 		accCount = 1;
	}
 	else{
 		$('#panel').hide();
 		accCount = 0;
 }

} 
//Fade out function
function quizzy(){

 	setTimeout(function(){
 	  $(document.body).fadeOut('slow');
 	},1000)
 
 	setTimeout(function(){
 		alert('Your custom bye message "peace" .')
 	},3000)
 }
 
//My XkCD function
function funFunc(){
 	console.log("You have initiated randomizer2000");
 	console.log("Generating a number at random");
	console.log("Your random number is 4");

}
