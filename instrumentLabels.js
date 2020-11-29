
function createInstrumentLabels(instruments)
{
    let instrumentLabelsContainer = document.getElementById("instrument-labels");
    for (let instrument of instruments)
    {
        let instrumentLabel = document.createElement("div");
        instrumentLabel.classList.add("instrument-label");
        instrumentLabel.innerHTML = instrument;
        instrumentLabelsContainer.appendChild(instrumentLabel);
    }
}