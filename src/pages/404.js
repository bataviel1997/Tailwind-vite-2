const app = document.getElementById('app')

export default function not_found(){

    app.innerHTML =`
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto 
    flex flex-col justify-center items-center">
    
    <h1 class="text-orange-500">Page Not found</h1>
    </div>
    `
}