export const randomname = ()=>{
    let counter = 0;
    let name = '';
    while (counter <= 4){
        const rad  = Math.floor((Math.random() * 9) + 100);
        name += String.fromCharCode(rad)
        counter++;
    }
    return name 
}