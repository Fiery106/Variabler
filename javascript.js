// oppretter en ny variabel med navnet 'a', og setter verdien til å være 10.
        // siden variabelen opprettes med nøkkelordet 'let' kan verdien endres senere.
        let a = 10;

        {
            // oppretter enda en variabel med samme navn som over! Hvorfor er det lov?
            let a = 20;
            // ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
            console.log(a, "fra innerst")
        }

        // ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
        console.log(a)



function hentVerdier() {
    let formNavn = document.getElementById('formNavn');
    let formTekst = document.getElementById('formTekst');
    let formSelect = document.getElementById('formSelect');
    let formFarge = document.getElementById('formFarge');
    let formDato = document.getElementById('formDato');

    console.log(formNavn.value)
    console.log(formTekst.value)
    console.log(formSelect.value)
    console.log(formFarge.value)
    console.log(formDato.value)
}