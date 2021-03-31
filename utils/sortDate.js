export default function sortDate (a,b,type){
  if(type === 'asc'){
    return a.Date.getTime() - b.Date.getTime()
  } else if (type === 'desc'){
    return b.Date.getTime() - a.Date.getTime()
  }
};
