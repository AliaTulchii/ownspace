// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const errorMessage = document.getElementById('error');
// const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



// form.addEventListener('submit', (e) => { 
//     const errors = []

//     if (username.value.trim() === "" ) {
//         errors.push("Please enter a username")
//     }

    

//     if (errors.length > 0) {
//         e.preventDefault()
//         errorMessage.toggleAttribute('hidden')

//         errorMessage.innerHTML = errors.join(', ')
//     }

//     errorMsg()

// })

// function errorMsg() {
//     if (email.nodeValue.match(mailRegex)) {
//         errorMessage.style.display = 'none'
//         email.style.borderBottom = '2px solid #ff0000'
//     } else if (email.value == "") {
//         errorMessage.style.display = 'none'
//         email.style.borderBottom = '2px solid #ff0000'
//     } else {
//         errorMessage.style.display = 'block'
//     }
// }

