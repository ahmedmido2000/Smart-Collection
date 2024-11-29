 const selectElement = document.getElementById('inputname205');
  const dunningLetter = document.getElementById('dunning-letter');
  const dunningLetterMail = document.getElementById('dunning-letter-mail');
  const mail = document.getElementById('mail');
  const SMS = document.getElementById('sms');
  selectElement.addEventListener('change', function() {
      console.log(22);
const value = selectElement.value;
dunningLetter.classList.add("d-none")
dunningLetterMail.classList.add("d-none")
mail.classList.add("d-none")
SMS.classList.add("d-none")

// Show the relevant section based on the selected option
if (value == 'Dunning letter (Standard letter)' || value == 'Dunning letter with AR (Acknowledgment of reciept)' || value == 'Fax') {
  dunningLetter.classList.remove("d-none")
} else if (value == 'Dunning letter via ERM (Electronic Registered Mail)') {
  dunningLetterMail.classList.remove("d-none")
} else if (value == 'E-mail') {
  mail.classList.remove("d-none")
} else if (value == 'SMS') {
  SMS.classList.remove("d-none")
}
});