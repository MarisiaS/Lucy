const textInputField = document.querySelector("#text-input")
const form = document.querySelector("#form")
const clean = document.querySelector("#clean-button")
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()
textInputField.focus();
form.onsubmit = (event) => {
    event.preventDefault()
    ourText = textInputField.value
    utterThis.text = ourText
    synth.speak(utterThis)
    textInputField.focus()
  }

function cleanText() {
    document.getElementById("text-input").value = "";
}
