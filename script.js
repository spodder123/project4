const form=document.getElementById('form')
const name= document.getElementById('name')
const phoneNumber= document.getElementById('phoneNumber')
const email= document.getElementById('email')
const errorDisplay=document.getElementById('error')
const comment=document.getElementById('comment')
form.addEventListener('submit',(feedback)=>{
	let regexE = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
	let eventMessage=[]//for messages
	if (name.value==null){
		eventMessage.push('Please enter your full name')
	}
	if (name.value==''){
		eventMessage.push('Please enter your full name')
	}
	if (email.value==null){
		eventMessage.push('Please enter your email')
	}
	if (email.value==''){
		eventMessage.push('Please enter your email')
	}
	if(phoneNumber.value.length<10){
		eventMessage.push('Please enter valid phone number')
	}
	if(phoneNumber.value.length>10){
		eventMessage.push('Please enter valid phone number')
	}
	if (comment.value==null){
		eventMessage.push('Please add comment')
	}
	if (comment.value==''){
		eventMessage.push('Please add comment')
	}
	if(!regexE.test(email.value)){
		eventMessage.push('Please enter valid email')
	}

	if(eventMessage.length>0){
	feedback.preventDefault()
	errorDisplay.innerText=eventMessage.join(', ')
}
})


	/*function ValidateEmail(email){
		var mailformat = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		if(email.value.match(mailformat)){
			alert("Valid email address!");
			document.form1.text1.focus();
			return true;
		}
		else{
			alert("You have entered an invalid email address!");
			document.form1.text1.focus();
			return false;
		}
	}*/
