// // Дано вещественное число A. Вычислить х = a**2+4+5  при а < 62; в противном случае x = 1/(a**2) + 4a + 5).
// function verify(){
//     console.log("a")
//     let a = parseFloat(elementA.value);
//     console.log(a)
    
//     if (a < 62) {
//         x = a**2+4+5
//         document.getElementById('x').innerText = x;}
//     else {
//         x = 1/((a**2) + 4*a + 5)
//         document.getElementById('x').innerText = x;}
       
//     }
    
// elementA = document.getElementById('a');
// elementVerify = document.getElementById('verify');
// elementVerify.addEventListener('click', verify);




    
function verify(){
   
    let a = parseFloat(elementA.value);
    if (isNaN(a)===true) {alert('введи норм число')}

    else{
    console.log(a)
    
    if (a < 62) {
        x = a**2+4+5
        document.getElementById('x').innerText = x;}
    else {
        x = 1/((a**2) + 4*a + 5)
        document.getElementById('x').innerText = x;}
        if (isNaN(x)===true) {alert('введи норм число')}
       
    }}

    
    
elementA = document.getElementById('a');
elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify);


 
