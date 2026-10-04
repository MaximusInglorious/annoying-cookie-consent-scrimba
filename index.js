const modalEl = document.getElementById('modal');
const modalTextEl = document.getElementById('modal-text');
const consentFormEl = document.getElementById('consent-form');
const modalCloseBtn = document.getElementById('modal-close-btn');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtnsEl = document.getElementById('modal-choice-btns');

setTimeout(function () {
    modalEl.style.display = 'inline';
}, 1500);

consentFormEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(consentFormEl);
    const fullName = formData.get('fullName');

    modalTextEl.innerHTML = `
        <div class="modal-inner-loading">
            <img src="./images/loading.svg" alt="loading animation" class="loading" />
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
    `;

    setTimeout(function () {
        document.getElementById('upload-text').textContent = "Making the sale...";
    }, 1500);

    setTimeout(function () {
        document.getElementById('modal-inner').innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="./images/pirate.gif" alt="Pirate laughing gloriously with a crow perched on his shoulder." />
            </div>
        `;

        modalCloseBtn.disabled = false;
    }, 3000);
});

modalCloseBtn.addEventListener('click', function() {
    modalEl.style.display = 'none';
});

declineBtn.addEventListener('mouseenter', function() {
    modalChoiceBtnsEl.classList.toggle('modal-btns-reverse');
});