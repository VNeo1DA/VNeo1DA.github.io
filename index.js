//top section variables
let topMainHead = "Join our community";
let subHeading = "30-day, hassle-free money back guarantee";
let servicesOffered = "Gain access to our full library of tutorials along with expert code reviews.";
let targetMarketMsg = "Perfect for any developers who are serious about honing their skills.";
//left section variables
let leftMainHead = "Monthly Subscription";
let subscriptionAmt = "&dollar;29";
let subscriptionTxt = " per month";
let dailyRate = "Full access for less than &dollar;1 a day";
let signUpButton = "Sign Up";
//right section variables & array(s)
let rightMainHead = "Why Us";
let mainBenefits = new Array(
	"Tutorials by industry experts", 
	"Peer &amp; expert code review",
	"Coding exercises",
	"Access to our Github repos",
	"Community forum",
	"Flashcard decks",
	"New videos every week");
const numOfBenefits = mainBenefits.length;
let benefitsOfJoining ="";
if(numOfBenefits >= 1){
	for(let index = 0; index < numOfBenefits; index++)
	{
		benefitsOfJoining += "<p>" + mainBenefits[index] + "</p>";
	}	  
}
//let reasonsToJoinTag = document.getElementById("customer-benefits");
window.addEventListener("load", singlePriceInfo);
function singlePriceInfo(){
	//top Section
	document.getElementById("top-section-header").innerHTML = topMainHead;
	document.getElementById("top-section-subheader").innerHTML = subHeading;
	document.getElementById("core-services").innerHTML = servicesOffered;
	document.getElementById("target-customers").innerHTML = targetMarketMsg;
	//left Section
	document.getElementById("left-section-header").innerHTML = leftMainHead;
	document.getElementById("subscription-fee").innerHTML = subscriptionAmt;
	document.getElementById("per-month-text").innerHTML = subscriptionTxt;
	document.getElementById("daily-rate").innerHTML = dailyRate;
	document.getElementById("sign-up-button").innerHTML = signUpButton;
	//right Section
	document.getElementById("right-section-header").innerHTML = rightMainHead;
	document.getElementById("customer-benefits").insertAdjacentHTML("beforeEnd", benefitsOfJoining);
}