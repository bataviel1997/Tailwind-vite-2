import axios from "axios"
import Nav_bar from "../components/Navbar"

const app = document.getElementById('app')
window.handleBlog = (event)=>{
    event.preventDefault()


    let userData = JSON.parse(localStorage.getItem('userData'))
    let judul = event.target.judul.value;
    let img = event.target.img.value;
    let content = event.target.content.value;

    axios.post('http://localhost:3000/blogs', {
        userId : userData.user.id,
        author : userData.user.email,
        judul : judul,
        img : img,
        content : content,
        createdAt : new Date().toLocaleDateString()
    })
    .then(res =>{
        alert('Berhasil Tambah Blog')
        window.location.href = '/'
    })
    .catch(err=>{
        alert('Terjadi kesalahan')
        console.error(err)
    })


}

export default function addBlog(){

    document.title= "Blog Page"

    app.innerHTML = `
    ${Nav_bar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
        <form class="w-[500px] flex flex-col gap-4 mx-auto mt-10" onsubmit="handleBlog(event)">

            <div class="flex flex-col gap-2 font-light">
                <label for="judul">Judul</label>
                <input type="text" class="w-full px-3 h-10 font-light rounded-md" id="judul"/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="img">Link Gambar</label>
                <input id="img" type="text" class="w-full px-3 h-10 font-light rounded-md" />
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="content">Kontent</label>
                <textarea class="w-full p-3 h-[300px] font-light rounded-md" id="content"></textarea>
            </div>

            <button type="submit" class="ml-auto h-10 w-[30%] bg-orange-500 text-white rounded-md">
            Submit</button>
        </form>
    
    </div>
    `
    

}