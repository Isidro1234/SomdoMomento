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
    }, Register: async(username, email,password, code)=>{
        const auth = fetch("http://localhost:7000/som_do_momento/api/auth/Register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username, email,password, code})
      }) 
      const res =  await auth;
      const data = await res.json()
      console.log(data)
      return {res:data.res, user:data.user}
    }, getCodigo:async()=>{
        const codigo = fetch("http://localhost:7000/som_do_momento/api/auth/GetCodigo") 
        const res =  await codigo;
        const data = await res.json()
        return {res:data.res}
    }
}))