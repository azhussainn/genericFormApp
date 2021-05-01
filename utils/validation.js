const validateAge = (currentDate, dob) => {
    const currentYear = currentDate.slice(0, 4)
    const dobYear = dob.slice(0, 4)

    if(Number(currentYear) - Number(dobYear) > 18 ){
        return true
    }else if (Number(currentYear) - Number(dobYear) === 18){
        const currentMonth = currentDate.slice(5, 7)
        const birthMonth = dob.slice(5, 7)

        if(Number(currentMonth) - Number(birthMonth) > 0){
            return true
        }else if(Number(currentMonth) - Number(birthMonth) === 0){
            const currentDay = currentDate.slice(8, 10)
            const birthDay = dob.slice(8, 10)

            if(Number(currentDay) - Number(birthDay) >= 0){
                return true
            }else{
                return false
            }
        }else{
            return false
        }

    }else{
        return false
    }
}

const validatePhoneNumber = phone => {
    if(phone.length != 10){
        return false
    }return true
}

const validateEmail = email => {
    const emailType = email.split("@")[1]
    const validEmails = ['gmail.com', 'yahoo.com', 'hotmail.com', "outlook.com", "aol.com", "hotmail.co.uk"]
    return validEmails.includes(emailType)
}

module.exports = {
    validateAge,
    validatePhoneNumber,
    validateEmail
}