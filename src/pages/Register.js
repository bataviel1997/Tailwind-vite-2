import axios from "axios";
import Nav_bar from "../components/Navbar"

const app = document.getElementById('app')

window.handle_register = (e)=>{
    e.preventDefault();

    let email = e.target.email.value
    let password = e.target.password.value
    let password2 = e.target.password2.value
    // validator
        // jika email.password,passowrd2 kosong, alert =silahkan lengkapi data
    if(!email || !password || !password2){
        return alert('Silahkan Lengkapi Data')
    }
    // jika password tidak sama, alert= password harus sama
    if(password !== password2){
        return alert('Password Harus Sama')
    }

    axios.post('http://localhost:3000/users',{
        email : email,
        password : password
    })
    .then(res => {
        alert('Registrasi Berhasil')
        window.location.href = '/login'
    })
    .catch(err =>{
        alert('Terjadi Kesalahan')
        console.error(err)
    })
    
}

export default function Register(){

    document.title= "Register Page"

    app.innerHTML =`
    ${Nav_bar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
    
    <h1 class="text-orange-500">Register Page</h1>

        <form class="w-[320px] flex flex-col gap-4 mx-auto" onsubmit="handle_register(event)">

            <div class="flex flex-col gap-2 font-light">
                <label for="email">Email</label>
                <input type="email" id="email" class=" h-10 px-3 font-light rounded-md
                border-slate-200 border-[2px]"/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="password">Password</label>
                <input type="password"  id="password" class=" h-10 px-3 font-light rounded-md
                border-slate-200 border-[2px]"/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="password2">Ulangi-Password</label>
                <input type="password"  id="password2" class=" h-10 px-3 font-light rounded-md
                border-slate-200 border-[2px]"/>
            </div>

            <button class=" h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto">Register</button>

        </form>
    </div>
    `
}