export const handlefeed = (data)=>{
    const genre = []
    const artist = []
    const recent = []
    const now = new Date()
    data.map((item)=>{
       artist.push(data.filter((it)=>it?.artistname == item?.artistname))
       if(item?.genre){
        genre.push(data.filter((it)=>it?.genre == item?.genre))
       }
       if(item?.seconds){
        recent.push(data.filter((it)=>new Date(it.date?.seconds * 1000) <= now))
       }
       
    })
    if(genre.length > 0 && artist.length > 0  && recent.length > 0){
       return [genre,artist,recent] 
    }else{
        const finalresult = []
        const todo = [genre,artist,recent] 
        todo.map((it)=>{
            if(it.length > 0){
                finalresult.push(it)
            }
        })
        return finalresult
    }
    
}