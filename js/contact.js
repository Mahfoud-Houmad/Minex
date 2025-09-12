function sendMail(){
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value, 
    };

    emailjs.send('service_1ulhnru', 'template_vtpsstl', parms)
      .then(function(response) {
        alert("Email envoyé !");
        console.log("SUCCESS", response.status, response.text);
      }, function(error) {
        alert("Une erreur est survenue : " + JSON.stringify(error));
        console.error("FAILED", error);
      });
  }