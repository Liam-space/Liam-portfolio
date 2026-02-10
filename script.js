document.getElementById("year").textContent = new Date().getFullYear();

const user = "williamgbadebooke";
const domain = "gmail.com";
const email = `${user}@${domain}`;

const emailLink = document.getElementById("emailLink");
if (emailLink) {
  emailLink.textContent = email;
  emailLink.href = `mailto:${email}`;
}
