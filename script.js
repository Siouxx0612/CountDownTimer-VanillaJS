const birthday = '9 November 2022';

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    console.log(birthdayDate - currentDate);
}

countdown();