$(document).ready(function(){
  "use strict";
  var inputs=[];
  var total;
  var nums=[0,1,2,3,4,5,6,7,8,9];
  var operators2=["+","-","/","=","*","."];
  var operator1=["."];
  var hashOperator=["#"];
// getInput function
  function getInput(input){
    // if(operator1.indexOf(inputs[inputs.length-1])===true && input===operator1[0]){
    //     alert("Duplicated .");
    //    
    
    
      if(operator1.includes(inputs[inputs.length-1])===true && input===operator1[0]){
   alert("Duplicate '.'")
  }
    /// check if the input not start with operaor
    else if(operators2.includes(input)===false && inputs.length===1){
            inputs.push(input);
            }
      //If last character was not an operator add operator to the array
  else if(operators2.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
    // check if the last input is not .
    else if(operator1.includes(inputs[inputs.length-1]===false)){
      inputs.push(input);
    }
   // else if(input==="power"){
   //   inputs
   // }
    // check if the input is Number if true push it to the inputs
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    // 
  
      update();
    
  }
//  update function
  function update(){
    total=inputs.join("");
    $("#output").html(total);
  }
  // answer function
  function answer(){
    total=inputs.join("");
    $("#output").html(eval(total));
  }
  // onclick event
  $("button").on("click",function(){
    if(this.id==="C"){
      inputs=[""];
      update();
    }
    else if(this.id==="CE"){
      inputs.pop();
      update();
    }else if(this.id==="="){
      answer();
    }
    else if(this.id==="power"){
     total=inputs.join("");
    $("#output").html(eval(total*total)); 
    }
    else{
      /// check if the input is A string
      if(this.id.indexOf("+","*","-","/")===-1){
        getInput(this.id);
      }else{
        getInput(this.id);
      }
      
    }
    
    
  });
  
  // $("#power").click(function(){
  //   total=inputs.join("");
  //   $("#output").html(eval(total*total));
  // });
 
  
});