let btn = document.querySelector("#btn");
let url = "https://api.github.com/users/";


btn.addEventListener("click", async () => {
    let username = document.querySelector("#user").value;
    let response = await fetch(url+username);
    let data = await response.json();
    console.log(data);
    document.querySelector("#result").innerHTML = `
    <img src=${data.avatar_url} 
    height="300"
    width="300"/>
    `;
    document.querySelector("img").style.borderRadius = "50%";
    document.querySelector("#dat").innerHTML = `
    <p> Name : ${data.name}
        <br>
        <br>
        Followers : ${data.followers}
        <br>
        <br>
        Following : ${data.following}
        <br>
        <br>
        Repositories : ${data.public_repos}
    </p>`

});

