export const storemedia = async(file)=>{
    try {
       const formData = new FormData()
  formData.append("file", file)
  const savefile  = fetch("http://localhost:7000/som_do_momento/api/storage/store",{
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
        console.log(error.message)
        return false
    }
  
} 