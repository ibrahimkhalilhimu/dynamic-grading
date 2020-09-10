document.getElementById('btn').addEventListener('click',function(){

 const input =document.getElementById('numberPlace').value;
 console.log(input); 
  gradePoint();

})

function gradePoint() {

    var grade;
switch (grade) {
    case 0<=32:
        grade ='F'
        break;

        case 33<=39:
            grade ="D"
        break;

        case 40<=49:
            grade ="C"
        break;    
        case 50<=59:
            grade ="B"
        break;

        case 60<=69:
            grade ="A"
        break;

        case 70<=79:
            grade ="A"
        break;

        case 80<=100:
            grade ="A+"
        break;    
}
    var text =document.getElementById('grade').innerText;
    console.log(grade);
}