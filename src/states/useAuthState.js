import {create} from "zustand"

export const useAuthState = create((set,get)=>({
    Login:async(email,password)=>{
        console.log(email,password)
        const auth = fetch("http://localhost:7000/som_do_momento/api/auth/Login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({email,password})
      }) 
      const res =  await auth;
      const data = await res.json()
      return {res:data.res, user:data.user}
    }
}))