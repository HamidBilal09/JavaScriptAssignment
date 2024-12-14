
const calculateAge=() => {
    event.preventDefault();
  
    const birthYear = document.getElementById('getValue').value;
    const currentYear = new Date().getFullYear();
  
    if (birthYear) {
      const age = currentYear - birthYear;
  
     
      if (age >= 0) {
        document.getElementById('result').textContent = `You are ${age} years old.`;
      } else {
        document.getElementById('result').textContent = "Please enter a valid birth year.";
      }
    } else {
      document.getElementById('result').textContent = "Please enter your birth year.";
    }
  };
  const area=()=>{
    event.preventDefault();
    const getWidth = document.getElementById('getValue').value;
    const getLength = +prompt("enter The length")   
    const area= getWidth*getLength   
    document.getElementById('result').textContent = `The total Area is ${area}`;
  }
  
  const circleArea=()=>{
    event.preventDefault();

    const radius = document.getElementById('getValue').value;
    if(radius>0){
     const area = 3.142*Math.pow(radius,2)
     document.getElementById('result').textContent = `The area of the circle is ${area.toFixed(2)} square units.`;

    }
    else{
        document.getElementById('result').textContent = "Please enter a valid radius.";
    }


  }
 const cubeArea=() => {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const sideLength = document.getElementById('getValue').value;
  
    if (sideLength > 0) {
      const area = 6 * Math.pow(sideLength, 2);
      document.getElementById('result').textContent = `The surface area of the cube is ${area.toFixed(2)} square units.`;
    } else {
      document.getElementById('result').textContent = "Please enter a valid side length.";
    }
  }
  const totalMinut=()=>{
    const totalSeconds = document.getElementById('getValue').value;

    const minutes = Math.floor(totalSeconds / 60);
    document.getElementById('result').textContent = `The totall Minutes ${minutes} `;
  }
  
  const calPercentage= ()=>{
    const totalMarks = document.getElementById('getValue').value;
   const   getMarks = +prompt("Get Your Marks")  
   if (totalMarks > 0) {
    const  percentage= (getMarks / totalMarks) * 100;
    document.getElementById('result').textContent = `The total percentage %${percentage}.`;

  } else {
    return "Total cannot be zero or negative.";
  }

  }
    // *************Question 1*******
    let a = 2;
  let b = ++a * 2; 
  console.log("Question no 1 B: ",b);

    // *************Question 2*******
    let x = 5;
    let y = x-- + 2;
console.log("Question  no 2 Y: ",y);
    
    // *************Question 3*******
    let x1 = 3;
    let y2 = ++x + x++ + ++x;
    console.log("Question no 3",y2);
    // *************Question 4*******

    let m = 2;
    let n = ++m * m++ * --m;
    console.log("Question no 4 n:",n);
    // *************Question 5*******
    let a1 = 3;
    let b2 = 5;
    let result = ++a + b-- - a++ + --b;
    console.log("Question no 5 result: ",result);
    // *************Question 6*******

    
let m1 = 2;
let n2 = 4;
let p = m++ + ++n - --m + n--;
console.log("Question no 6 p",p);
    // *************Question 7*******



 let a3 = 5;
let b4 = 3;
let c = 2;
let d = 7;

let result1 = ++a * (b-- + c) / --d;
console.log("question no 7 result1:",result1);

// a?, b?, c?, d? ,result?
    // *************Question 8*******

 
let m5 = 2;
let n6 = 3;
let o = 4;
let result2 = m++ * (--n + m) / (o-- - n);
console.log("question no 8 result2:",result2);

    

    
    
    
    
    
    

  