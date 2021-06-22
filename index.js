document.getElementById('nameSurname')
console.log(nameSurname.innerHTML = "Neim Ramazanoğlu")

document.getElementById('age')
console.log(age.innerHTML = "27")

let linkofLinkedin = document.getElementById('linkedin')
linkofLinkedin.href = "https://www.linkedin.com/in/neimramazanoglu/"

let linkofGitHub = document.getElementById('github')
linkofGitHub.href = "https://github.com/Neim-Ramazanoglu"

function myFunction(){

    document.getElementById('buton').style.display = "none";
    document.getElementById('nameAge').style.display = "block";
}

