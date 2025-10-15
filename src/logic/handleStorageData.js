export const storemedia = async(file)=>{
    try {
       const formData = new FormData()
  formData.append("file", file)
  const savefile  = fetch("https://somdomomento-backend.onrender.com/som_do_momento/api/storage/store",{
    method:"POST",
    body:formData
  })

  const res = await savefile;
  const data = await res.json();
  if(data.success){
    return data.file
  }
  return false 
    } catch (error) {
        return false
    }
  
} 