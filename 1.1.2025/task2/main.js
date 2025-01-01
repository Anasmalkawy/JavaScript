function updatestystyle() {
  let ctext = document.getElementById("ctext")
  let fon = document.getElementById("fon")
  let sizefon = document.getElementById("sizefon")
  let boldfon = document.getElementById("boldfon")
  let itfon = document.getElementById("itfon")
  let unfon = document.getElementById("unfon")

  ctext.style.fontFamily = fon.value;
  ctext.style.fontSize = sizefon.value;
  ctext.style.fontWeight = boldfon.checked ? 'bold' : 'normal'
  ctext.style.fontStyle = itfon.checked ? 'italic' : 'normal';
  ctext.style.textDecoration = unfon.checked ? 'underline' : 'none'

}