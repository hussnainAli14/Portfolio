export const handleChange = (e, setValue) => {
    setValue(e.target.value)
}

export const validateForm = (name,email,message,setErrorMessage,sendEmail,e) => {
    setErrorMessage('')
if(name === "" || email === ""|| message===""){
setErrorMessage('Please fill all the fields!');
}
else if(email.indexOf("@") === -1 || email.lastIndexOf(".") === -1 ){
setErrorMessage('Enter a valid email!')
}
else {
sendEmail(e);
}
}