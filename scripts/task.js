// Дано вещественное число A. Вычислить х = a**2+4+5  при а < 62; в противном случае x = 1/(a**2) + 4a + 5).
function verify(){
    console.log("a")
    let a = parseFloat(elementA.value);
    console.log(a)
    
    if (a < 62) {
        x = a**2+4+5
        document.getElementById('x').innerText = x;}
    else {
        x = 1/((a**2) + 4*a + 5)
        document.getElementById('x').innerText = x;}
       
    }
    
elementA = document.getElementById('a');
elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);


// Дано вещественное число A. Вычислить х = a**2+4+5  при а < 62; в противном случае x = 1/(a**2) + 4a + 5).
// function isLetterinRow(row) {
//     let regex = /^([а-яё]+|[a-z]+)$/i;
//     return regex.test(row)}

    
// function verify(){
    
    
//     if (isLetterinRow(elementA.value)===false) {
        
//         console.log("a")
//         let a = parseFloat(elementA.value);
//         console.log(a)
        
//         if (a < 62) {
//             x = a**2+4+5
//             document.getElementById('x').innerText = x;}
//         else {
//                 x = 1/((a**2) + 4*a + 5)
//                 document.getElementById('x').innerText = x;}
//             } 
            
//     else  {alert("Ага, я все вижу! Введи нормальное число");}
//         }
    
// elementA = document.getElementById('a');
// elementVerify = document.getElementById('verify');
// elementVerify.addEventListener('click', verify);


 
