function show() {
    document.getElementById('slidebar').classList.toggle('active');
}

var emailjs;

function sendMail(params) {
    var tempParas = {
        from_name: document.getElementById('nm').value,
        to_name: "Work Done",
        mail: document.getElementById('ml').value,
        message: document.getElementById('ms').value
    }


    emailjs.send('service_mhsuc6g', 'template_r0ofrro', tempParas)
        .then(function(res) {
            const a = res.status;
            console.log("Success");

            if (a == 200) {
                msg = document.getElementById('msg2').style.display = "block";
            }
        })



}
