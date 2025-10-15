export const format = (dateString)=>{
  const date = dateString.seconds;
  const newsdate = date * 1000;
  const now = new Date();
  const past = new Date(newsdate);
  const seconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: "ano", seconds: 31536000 },
    { label: "mes", seconds: 2592000 },
    { label: "semana", seconds: 604800 },
    { label: "dia", seconds: 86400 },
    { label: "hora", seconds: 3600 },
    { label: "minuto", seconds: 60 },
    { label: "segundo", seconds: 1 }
  ];

  for (let interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} atras`;
    }
  }


  return "agora"

}