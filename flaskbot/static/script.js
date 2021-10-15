const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");


// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Sally";
const PERSON_NAME = "YOU";

document.getElementById("time1").innerHTML=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
document.getElementById("time2").innerHTML=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  var today = new Date();
  var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${time}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse(userInput) {
  var usermsg = {"message": userInput};
  $.ajax({
    url: "/bot",
    type: "post",
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(usermsg),
    success: function(response) {
      msgText = response['bot_response'];
      const delay = msgText.split(" ").length * 100;
      setTimeout(() => {
        appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
      }, delay);
   },
   error: function(xhr) {
     console.log("error");
  }
  });

}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}