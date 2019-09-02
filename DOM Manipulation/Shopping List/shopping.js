var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var userinput = document.getElementById("userinput");
var lis = document.querySelectorAll("li");

function checkLength(){
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        userinput.value = "";
}
button.addEventListener("click", function(){
    if (checkLength() > 0){
        createListElement();
    } 
    
})

input.addEventListener("keypress", function(event) {
    if (checkLength() > 0 && event.keyCode === 13) {
        createListElement();
    } 
    
})

for (let count = 0; count < lis.length; count++) {
   lis[count].addEventListener("click", function() {
      this.classList.toggle("done");
      var delBtn = document.createElement("button");
      delBtn.id = "del" + count;
      delBtn.innerHTML = "Delete";
      this.appendChild(delBtn);
      delBtn.addEventListener("click", function(event){
          delBtn.parentElement.remove();
      })
    });
  }