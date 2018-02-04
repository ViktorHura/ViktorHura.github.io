emailjs.init("user_yPQqWfqAoMEfKVrExblhy");


function sendmail() {

  var emailu = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var messageu = document.getElementById('message').value;
  var browserdata = navigator.userAgent;

  var ipadress;

  $.getJSON('//freegeoip.net/json/?callback=?', function(data) {

    ipadress = data;

    var msg = emailu + "\n" + subject + "\n" + messageu + "\n" + browserdata + "\n" + JSON.stringify(ipadress, null, 2);

    if (emailu != '') {
      if (subject != '' && messageu != '') {
        console.log(msg);
        email(msg);

        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';


      }


    }

  });


}

function email(msgs) {

  emailjs.send("gmail", "template_585v5HYT", {
    "message_html": msgs
  });

}