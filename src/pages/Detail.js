import axios from "axios"
import Nav_bar from "../components/Navbar"

const app = document.getElementById('app')
export default function Details(){
    document.title = 'Detail Page'
//  1 membuat var penampung
    let params = new URLSearchParams(window.location.search)
    let _id = params.get('id')
// 2 axios mendapatakan data pada params id
    axios.get(`http://localhost:3000/blogs/${_id}`)
    .then((res)=>{
        app.innerHTML +=`
        ${Nav_bar()}
        <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
            <h1 class="text-4xl">${res.data.judul}</h1>
            <small>${res.data.author} - ${res.data.createdAt}</small>
            <img src="${res.data.img}" alt="${res.data.judul}" class="h-[500px] w-full object-cover my-6 rounded-lg"/>
            <p>${res.data.content}</p>
        </div>
    `
    })
    .catch((err)=>{
        console.error(err)
    })
}