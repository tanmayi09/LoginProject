const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    message.textContent = "Checking login...";

    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = data.message;
            message.style.color = "green";
        } else {
            message.textContent = data.message;
            message.style.color = "red";
        }

    } catch (error) {
        console.error("Error:", error);

        message.textContent = "Unable to connect to the server.";
        message.style.color = "red";
    }
});