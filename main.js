let minLabel = document.querySelectorAll(".label-contact");
let contactInput = document.querySelectorAll(".input-contact");
let favbutton = document.querySelectorAll(".like-btn")

contactInput.forEach(element => {
  element.addEventListener("keyup", function() {
    if (element.value == "") {
      element.classList.remove("input-writted");
    } else {
      element.classList.add("input-writted");
    }
  });

  element.addEventListener("mouseenter", function() {
    let id = element.dataset.id;
    console.log(id);
    minLabel[id].classList.toggle("label-min");
  });
  element.addEventListener("mouseout", function() {
    let id = element.dataset.id;
    console.log(id);
    minLabel[id].classList.toggle("label-min");
  });
});
favbutton.forEach(element => {
  element.addEventListener("click", function(){
      if(this.childNodes[0].dataset.prefix == "far"){
          this.childNodes[0].dataset.prefix = "fas"
      }
      else{
          this.childNodes[0].dataset.prefix = "far"
      }
  })

});