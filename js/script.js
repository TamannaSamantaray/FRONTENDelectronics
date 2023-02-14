
function myFunction() {
    var x = document.getElementById("nav-coll");
    if (x.className === "collapse") {
      x.className += " responsive";
    } else {
      x.className = "collapse";
    }
  }
  var captcha;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	var uniquechar = "";

	const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#&";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 6; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}
function printmsg() {
	const usr_input = document
		.getElementById("submit").value;
	
	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
		var s = document.getElementById("key")
			.innerHTML = "Matched";
		generate();
	}
	else {
		var s = document.getElementById("key")
			.innerHTML = "not Matched";
		generate();
	}
}
const input = document.getElementById('submit');

if (submit.placeholder) {
	submit.addEventListener('focus', (e) => {
		submit.placeholder = '';
  });
} else {
  submit.placeholder.preventDefault()
};
  // function cap() {
  //       var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  //       var a=alpha[Math.floor(Math.random()%62)];
  //       var b=alpha[Math.floor(Math.random()%62)];
  //       var c=alpha[Math.floor(Math.random()%62)];
  //       var d=alpha[Math.floor(Math.random()%62)];
  //       var e=alpha[Math.floor(Math.random()%62)];
  //       var f=alpha[Math.floor(Math.random()%62)];

  //       var sum=a + b + c + d + e + f;

  //       document.getElementById("capt")+sum;
  //       }

  //       function validcap(){
  //       var string1 = document.getElementById('capt').value;
  //       var string2 = document.getElementById('textinput').value;
  //       if(string1 == string2){
  //       alert("Form is validated Successfully");
  //       return true;
  //         }
  //       else{
  //       alert("Please enter a valid captcha");
  //       return false;
  //       }
  //   }
              




  //recaptcha

  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

 //google sign in
 function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}




//Experiment1 V-I characteristics

function function1(){
  document.getElementById("aim").style.display = "block";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function2(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "block";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function3(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "block";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function4(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "block";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function5(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "block";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function6(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "block";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function7(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "block";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function8(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "block";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function9(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "block";
  document.getElementById("Download").style.display = "none";
}
function function10(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "block";
}



//Experiment2 Half wave rectifier

function function11(){
  document.getElementById("aim").style.display = "block";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function12(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "block";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function13(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "block";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function14(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "block";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function15(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "block";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function16(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "block";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function17(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "block";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function18(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "block";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "none";
}
function function19(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "block";
  document.getElementById("Download").style.display = "none";
}
function function20(){
  document.getElementById("aim").style.display = "none";
  document.getElementById("apparatus").style.display = "none";
  document.getElementById("Theory").style.display = "none";
  document.getElementById("Pre-Lab").style.display = "none";
  document.getElementById("Procedure").style.display = "none";
  document.getElementById("Observations").style.display = "none";
  document.getElementById("Simulator").style.display = "none";
  document.getElementById("Post-Lab").style.display = "none";
  document.getElementById("Conclusion").style.display = "none";
  document.getElementById("Download").style.display = "block";
}