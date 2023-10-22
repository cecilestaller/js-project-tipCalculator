"use strict";


function calculateTip() {
    // Variablen deninieren für Input felder --> worauf zugreifen?
    const amount = Number(document.body.querySelector("#amount").value);
    const people = Number(document.body.querySelector("#people").value);
    const service = Number(document.body.querySelector("section form div select").value); 

    // Variablen definieren für Output Text--> wo soll output text hin?
    const outputTipAmount = document.body.querySelector("#tipAmount");
    const outputBillAmount = document.body.querySelector("#completeBillAmount");
    const outputSplittedAmount = document.body.querySelector("#splittedAmount");

    // Berechnungen bei onclick Event:
    let tip = (amount / 100) * service;
    let sum = amount + tip;
    let perPerson = sum / people;

    // Was soll in output text stehen/ Angabe mit .textContent
    outputTipAmount.textContent = `Das Trinkgeld beträgt: ${tip} €`;
    outputBillAmount.textContent = `Gesamter Rechnungsbetrag (inkl. Tip) beträgt: ${sum} €`;
    outputSplittedAmount.textContent = `Jede Person muss ${perPerson} € bezahlen`;

}
