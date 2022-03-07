// sing up
function singup(e) {
    event.preventDefault();
  
  
    let username = document.getElementById(`username`).value;
    let password = document.getElementById(`password`).value;
  
    let user = {
      username: username,
      password: password,
    };
  
    let json = JSON.stringify(user);
    localStorage.setItem(user, json);
    console.log("user added");
  }
  