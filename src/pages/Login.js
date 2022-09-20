import Nav_bar from "../components/Navbar"

const app = document.getElementById('app')

export default function Login(){
    document.title= "Login Page"

    app.innerHTML =`
    ${Nav_bar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
    
    <h1 class="text-orange-500">Login Page</h1>

    <form class="w-[320px] flex flex-col gap-4 mx-auto" >

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

    <button class=" h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto">Login</button>

</form>
    </div>
    `
}