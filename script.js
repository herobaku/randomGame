const input = document.querySelector("input"),
      enter = document.querySelector(".enter"),
      again = document.querySelector(".again"),
      output = document.querySelector(".output"),
      box = document.querySelector(".box");

let randomNumber = Math.floor( Math.random() * 10 ) + 1

function check() {
  let ins = +input.value
  let clear = input.value = ""
  if( ins === randomNumber ) {
    output.innerHTML = `Your number is right ${ins}`
    output.classList.add("active")
    let sv = input.setAttribute("disabled", "disabled")
    if( sv === undefined ) {
      console.log("ok")
    } return sv
  } else if ( isNaN(ins) ) {
    output.innerHTML = `Not a number`
    output.classList.add("notAcitve")
    clear
  } else if ( ins < randomNumber && ins > 1 ) {
    output.innerHTML = `You guessed to low`
    output.classList.add("notAcitve")
    clear
  } else if ( ins > randomNumber && ins < 1 ) {
    output.innerHTML = `You guessed to high`
    output.classList.add("notAcitve")
    clear
  } else {
    output.innerHTML = `Your number is between 1 and 100`
    clear
    output.classList.add("notAcitve")
  }
}

enter.addEventListener("click", check)
again.addEventListener("click", ()=>{
  location.reload();
})