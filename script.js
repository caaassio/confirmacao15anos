const form = document.querySelector("#rsvp");
const success = document.querySelector("#success");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();

    const presenca = document.querySelector(
        "input[name='presenca']:checked"
    )?.value;

    if (!nome || !presenca) {
        return;
    }

    const formData = new FormData();

    formData.append("entry.1517920740", nome);
    formData.append("entry.1320175725", presenca);

    try {

        await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSearnGZcbPB2wOCGZBpt709vsIXt54xyQbcaB-rHOZ93scU4w/formResponse",
            {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        );

        form.style.display = "none";
        success.style.display = "block";

    } catch (error) {

        console.error(error);
        alert("Ocorreu um erro ao enviar sua confirmação.");

    }
});