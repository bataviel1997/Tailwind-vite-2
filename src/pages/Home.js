import axios from "axios"
import Nav_bar from "../components/Navbar"

const app = document.getElementById('app')

export default function Home(){
    // ubah document title
    document.title= "Home Page"

    axios.get('http://localhost:3000/blogs')
    .then(res=>{
        console.info(res)
        app.innerHTML += Nav_bar()
        res.data.forEach((e)=>{
            app.innerHTML += `
            <div class="flex flex-col gap-4 max-w-[900px] bg-white shadow-md p-6 my-4 mx-auto">
                <h1>${e.judul}</h1>
                <small>${e.author}</small>
                <img src="${e.img}" alt="${e.judul}" class="w-full h-[200px] object-cover"  />
                <p>${e.content}</p>
            </div>
            `
        })
    })

    // app.innerHTML =`
    // ${Nav_bar()}
    // <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
    
    // <h1 class="text-orange-500"></h1>
    // </div>
    // `
}