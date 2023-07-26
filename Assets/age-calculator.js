document.querySelector('.calculate-button')
.addEventListener(('click'), () => {
    const enteredDay = document.querySelector('.day-textbox').value;
    let isValid;
    
    if(enteredDay === '') {
        document.querySelector('.error-message-day').innerHTML='This field is required'

        document.querySelector('.valid-day')
        .classList.add('invalid-day')

        document.querySelector('.day-textbox')
        .classList.add('day-textbox-error')
        
        isValid = false;
    
    } else if (+ enteredDay < 1 || + enteredDay > 31) {
        document.querySelector('.error-message-day').innerHTML='must be a valid day'

        document.querySelector('.valid-day')
        .classList.add('invalid-day')

        document.querySelector('.day-textbox')
        .classList.add('day-textbox-error')
        
        isValid = false;

    }else{
        document.querySelector('.error-message-day').innerHTML='';
        
        document.querySelector('.valid-day').classList.remove('invalid-day')
        
        document.querySelector('.day-textbox')
        .classList.remove('day-textbox-error')

        isValid = true;
    }



    const enteredMonth = document.querySelector('.month-textbox').value;
    
    if(enteredMonth === '') {
        document.querySelector('.error-message-month').innerHTML='This field is required'

        document.querySelector('.valid-month')
        .classList.add('invalid-month')

        document.querySelector('.month-textbox')
        .classList.add('month-textbox-error')
        
        isValid = false;
    
    } else if (+ enteredMonth < 1 || + enteredMonth > 12) {
        document.querySelector('.error-message-month').innerHTML='must be a valid month'

        document.querySelector('.valid-month')
        .classList.add('invalid-month')

        document.querySelector('.month-textbox')
        .classList.add('month-textbox-error');
        
        isValid = false;

    }else{
        document.querySelector('.error-message-month').innerHTML='';
        
        document.querySelector('.valid-month').classList.remove('invalid-month')
        
        document.querySelector('.month-textbox')
        .classList.remove('month-textbox-error');

        isValid = true;
    }




    const enteredYear = document.querySelector('.year-textbox').value;
    
    if(enteredYear === '') {
        document.querySelector('.error-message-year').innerHTML='This field is required'

        document.querySelector('.valid-year')
        .classList.add('invalid-year')

        document.querySelector('.year-textbox')
        .classList.add('year-textbox-error');
        
        isValid = false;
    
    } else if (+ enteredYear < 1 || + enteredYear > 2023) {
        document.querySelector('.error-message-year').innerHTML='must be a valid year'

        document.querySelector('.valid-year')
        .classList.add('invalid-year')

        document.querySelector('.year-textbox')
        .classList.add('year-textbox-error');
        
        isValid = false;

    }else{
        document.querySelector('.error-message-year').innerHTML='';
        
        document.querySelector('.valid-year').classList.remove('invalid-year')
        
        document.querySelector('.year-textbox')
        .classList.remove('year-textbox-error');

        isValid = true;
    }

    if(isValid === true) {
        let birthday = `${enteredMonth}/${enteredDay}/${enteredYear}`

        let birthdayObject = new Date(birthday);
        let ageDiff = Date.now() - birthdayObject;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();

        document.querySelector('.output-year-blank')
        .innerHTML = ageYears;
        document.querySelector('.output-month-blank')
        .innerHTML = ageMonth;
        document.querySelector('.output-day-blank')
        .innerHTML = ageDay;
    } else if (isValid === false) {
        document.querySelector('.output-year-blank')
        .innerHTML = '--';
        document.querySelector('.output-month-blank')
        .innerHTML = '--';
        document.querySelector('.output-day-blank')
        .innerHTML = '--';
    } 

    
})