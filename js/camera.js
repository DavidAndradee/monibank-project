const botaoCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")

const botaoFoto = document.querySelector("[data-tirar-foto]")
const canva = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")

const enviarFoto = document.querySelector("[data-enviar]")

let imagemURL = "";

botaoCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoFoto.addEventListener("click", function(){
    canva.getContext('2d').drawImage(video, 0, 0, canva.clientWidth, canva.height)
    imagemURL = canva.toDataURL("image/jpeg")

    botaoCamera.style.display = "none";
    mensagem.style.display = "block";
})

enviarFoto.addEventListener("click", () => {
    const receberDados = localStorage.getItem("cadastro");
    const convertReturn = JSON.parse(receberDados)

    convertReturn.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(convertReturn));

    window.location.href = "./abrir-conta-form-3.html";
})