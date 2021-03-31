export default function toggleFilterIcon (event, sortType){
  let elementId = event.target.id;
  let CSS_selector = '';

  if(sortType === 'asc'){
    CSS_selector = `${elementId}-asc`;
    toggleAll();
    document.getElementById(elementId).style = {color: 'black'};
    document.getElementById(CSS_selector).style = {color: 'black'};
    document.getElementById(CSS_selector).hidden = false;
  };
  if(sortType === 'desc'){
    CSS_selector = `${elementId}-desc`;
    toggleAll();
    document.getElementById(elementId).style = {color: 'black'};
    document.getElementById(CSS_selector).style = {color: 'black'};
    document.getElementById(CSS_selector).hidden = false;
  }
};

function toggleAll (){
  let headerNodeList = document.getElementsByClassName('toggle-color');
  let iconNodeList = document.getElementsByClassName('filter-icons');

  for(let i = 0; i < headerNodeList.length; i++){
    headerNodeList[i].style.color = "gray"
  };

  for(let i = 0; i < iconNodeList.length; i++){
    iconNodeList[i].hidden = true
  };
};
