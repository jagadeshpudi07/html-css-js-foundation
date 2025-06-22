function showWelcomeAlert() {
  alert("Welcome to web development! 🎉\n\nYou've successfully triggered a JavaScript function!")
  updateOutput("Welcome alert displayed! This demonstrates how JavaScript can respond to user interactions.")
}

function changeBackgroundColor() {
  const colors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.background = randomColor

  updateOutput("Background color changed! This shows how JavaScript can modify CSS styles dynamically.")
}

function showCurrentTime() {
  const now = new Date()
  const timeString = now.toLocaleString()

  updateOutput(
    `Current date and time: <strong>${timeString}</strong><br>This demonstrates how JavaScript can work with dates and time.`,
  )
}

function askUserName() {
  const userName = prompt("What's your name?")

  if (userName && userName.trim() !== "") {
    const greeting = `Hello, ${userName}! 👋<br>Nice to meet you! This shows how JavaScript can collect user input and create personalized experiences.`
    updateOutput(greeting)
  } else {
    updateOutput("No name provided, but that's okay! JavaScript can handle different user responses gracefully.")
  }
}

function updateOutput(message) {
  const outputDiv = document.getElementById("output")
  outputDiv.innerHTML = `<p>${message}</p>`

  outputDiv.style.transform = "scale(0.95)"
  setTimeout(() => {
    outputDiv.style.transform = "scale(1)"
  }, 100)
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully! Check the browser's developer console to see this message.")

  console.log("🚀 Welcome to your first web development project!")
  console.log("📚 This project demonstrates HTML, CSS, and JavaScript working together.")

  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.3s ease"
    })

    section.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  let clickCount = 0
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      clickCount++
      console.log(`Button clicked! Total clicks: ${clickCount}`)
    })
  })
})

function demonstrateArrays() {
  const fruits = ["apple", "banana", "orange", "grape"]
  const message = `Here's an array of fruits: ${fruits.join(", ")}<br>
                    Array length: ${fruits.length}<br>
                    First fruit: ${fruits[0]}<br>
                    Last fruit: ${fruits[fruits.length - 1]}`
  updateOutput(message)
}

function demonstrateObjects() {
  const person = {
    name: "John Doe",
    age: 25,
    profession: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript"],
  }

  const message = `Here's a JavaScript object:<br>
                    Name: ${person.name}<br>
                    Age: ${person.age}<br>
                    Profession: ${person.profession}<br>
                    Skills: ${person.skills.join(", ")}`
  updateOutput(message)
}

function demonstrateLoops() {
  let result = "Counting from 1 to 5: "
  for (let i = 1; i <= 5; i++) {
    result += i + " "
  }
  result += "<br>This demonstrates a JavaScript for loop!"
  updateOutput(result)
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function demonstrateValidation() {
  const email = prompt("Enter an email address to validate:")
  if (email) {
    const isValid = validateEmail(email)
    const message = `Email: ${email}<br>
                        Valid: ${isValid ? "✅ Yes" : "❌ No"}<br>
                        This demonstrates basic form validation with JavaScript!`
    updateOutput(message)
  }
}
