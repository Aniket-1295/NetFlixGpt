const validateFields = (email, password,fullname) => {

    // if(!email || !password || !fullname){
    //     return "email, password and fullname are required"
    // }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    const fullnameRegex = /^[a-zA-Z ]{2,50}$/;

    if(!fullnameRegex.test(fullname)){
        return "Fullname must contain at least 2 characters and no more than 50 characters"
    }

    if(!emailRegex.test(email)){
        return "Invalid email"
    }
    if(!passwordRegex.test(password)){
        return "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    }
    

    return null



    
}

export { validateFields }