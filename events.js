
const button= document.querySelector('button')
const container = document.querySelector('.container')
const reset=document.querySelector('.Rbutton')
reset.style.visibility='hidden'

button.onclick=function(){
    let numberofGrids=parseInt(prompt('Enter the GridSize:'))
    for(let i=0;i<numberofGrids;i++){
        for(let j=0;j<numberofGrids;j++){
            const smallDiv=document.createElement('div')
            smallDiv.className='grid'
            container.append(smallDiv)
            smallDiv.style.height=(500/numberofGrids)+'px'
            smallDiv.style.width=(500/numberofGrids)+'px'
        }
    }
    //after creating the first grid making it invisible  
    button.style.visibility='hidden';
    reset.style.visibility='visible'
}

/*container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.grid')) {
      e.target.classList.add('active');
    }
  });
 */

container.addEventListener('mouseover',getNewRandomColor)

function getNewRandomColor(e)
{
    var myArray = ['red', 'green', 'blue','pink','yellow','aqua','orange'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    if (e.target.matches('.grid')) {
        //e.target.classList.add('active');
        e.target.style.backgroundColor=rand
      }
   

    //document.getElementById("myDiv").style.backgroundColor = rand;
}
  /*
  Reference code from W3schools to remove the child nodes from the DOM
        var list = document.getElementById("myList");
                while (list.hasChildNodes()) {  
                list.removeChild(list.firstChild);
                }
   */


reset.onclick=function(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
    button.onclick()
}


