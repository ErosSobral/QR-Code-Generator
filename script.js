const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
generate = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qrcode img");

generate.addEventListener("click", () =>{
    let qrvalue = qrinput.value;
    if(!qrvalue) return;
    generate.innerText = "Generating QR Code..."
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrimg.addEventListener("load",() => {
        wrapper.classList.add("active");
        generate.innerText = "Generate QR Code"

    })
});
qrinput.addEventListener("keyup", () =>{
    if(!qrinput.value) {
        wrapper.classList.remove("active");
    }
})
