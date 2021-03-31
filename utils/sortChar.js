export default function sortChar (a,b,type){
  if(type === 'asc'){
    if(a.To.toUpperCase() < b.To.toUpperCase()){
      return -1
    } else if (a.To.toUpperCase() > b.To.toUpperCase()){
      return 1
    } else {
      return 0
    }
  } else if (type === 'desc'){
    if(a.To.toUpperCase() < b.To.toUpperCase()){
      return 1
    } else if (a.To.toUpperCase() > b.To.toUpperCase()){
      return -1
    } else {
      return 0
    }
  }
};
