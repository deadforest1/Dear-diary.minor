document.getElementById('button').addEventListener('click', function(){

    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronimicText = document.getElementById('patronimic');
    const genderText = document.getElementById('gender');
    const placeText = document.getElementById('place');
    
    
    if (issuedText.innerText === 'ГУ МВД РОССИИ ПО МОСКОВСКОЙ ОБЛАСТИ'){
       issuedText.innerText = 'THE MINISTRY OF INTERNAL AFFAIRS OF RUSSIA IN THE MOSCOW REGION';
       surnameText.innerText = 'ISUPOVA';
       nameText.innerText = 'OLESYA';
       patronimicText.innerText = 'PETROVNA';
       genderText.innerText = 'FEMALE';
       placeText.innerText = 'FRYAZINO, MOSCOW REGION';
    }

    else {
        issuedText.innerText = 'ГУ МВД РОССИИ ПО МОСКОВСКОЙ ОБЛАСТИ';
        surnameText.innerText = 'ИСУПОВА';
        nameText.innerText = 'ОЛЕСЯ';
        patronimicText.innerText = 'ПЕТРОВНА';
        genderText.innerText = 'ЖЕН.';
        placeText.innerText = 'ГОР. ФРЯЗИНО МОСКОВСКАЯ ОБЛАСТЬ';

    }
});
