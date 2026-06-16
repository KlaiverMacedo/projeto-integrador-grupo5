document.addEventListener("DOMContentLoaded", () => {

    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');
    const btnPular = document.getElementById('pular-intro');

    const fecharIntro = () => {
        if (introOverlay) {
            introOverlay.classList.add('escondido');
            document.body.classList.remove('intro-ativa');

            if (introVideo) {
                introVideo.pause();
            }
        }
    };

    if (introVideo) {
        introVideo.addEventListener('ended', fecharIntro);
    }

    if (btnPular) {
        btnPular.addEventListener('click', fecharIntro);
    }

    const botaoDemonstracao = document.getElementById('botao-demonstracao');

    if (botaoDemonstracao) {
        botaoDemonstracao.addEventListener('click', function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

            const secaoDemonstracao = document.getElementById('demonstracao');
            if (secaoDemonstracao) {
                secaoDemonstracao.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }

    const formContato = document.getElementById('form-contato');
    const feedbackForm = document.getElementById('feedback-form');

    if (formContato) {
        formContato.addEventListener('submit', function (event) {

            event.preventDefault();

            const nomeDigitado = document.getElementById('nome').value;

            feedbackForm.style.color = "#c77dff";
            feedbackForm.innerText = `Obrigado, ${nomeDigitado}! Sua mensagem foi recebida com sucesso pela equipe Digital Coders.`;

            formContato.reset();

            setTimeout(() => {
                feedbackForm.innerText = "";
            }, 5000);
        });
    }

});