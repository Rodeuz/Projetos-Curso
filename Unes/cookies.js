


document.cookie="name=Matheus"
document.cookie="Profissão=Programador"
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"
console.log(document.cookie)


const nomeCookie = document.cookie
.split(';')
.find(row => row.startsWith('name='))
.split('=')[1];
  
console.log(nomeCookie); // Matheus
