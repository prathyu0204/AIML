// Toggle chatbot
const toggle = document.getElementById("chatbot-toggle");
const box = document.getElementById("chatbot-box");
const closeBtn = document.getElementById("chat-close");

toggle.onclick = () => box.style.display = "flex";
closeBtn.onclick = () => box.style.display = "none";

// Simple fake bot reply
const input = document.getElementById("chat-input");
const log = document.getElementById("chat-log");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value.trim()) {
    const userMsg = `<div><strong>You:</strong> ${input.value}</div>`;
    log.innerHTML += userMsg;

    const botReply = getBotReply(input.value);
    log.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    log.scrollTop = log.scrollHeight;
    input.value = "";
  }
});

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("course")) return "We offer BTech AIML, PGDML, and research programs.";
  if (msg.includes("faculty")) return "Our faculty includes AI experts like Dr. Sharma and Prof. Mehta.";
  if (msg.includes("contact")) return "You can reach us via email at aiml@college.edu.";
  return "Sorry, I didn’t understand that. Try asking about courses, faculty, or contact.";
}
