import React, { useRef, useState } from 'react'
import '.././index.css'

const Game = () => {
  const [item, setItem] = useState(true)
  const xo = useRef()
  const getXO = useRef()

 
    
    const itemHandler = (e) => {
      // let ubID = xo.current.id 
      console.log(xo.current.id);

      if(item && e.target.innerHTML ===''){
        e.target.innerHTML=`<span className='span'>X</span>`
        setItem(!item)
        xo.current.innerHTML= `<span className='span'>O</span>`

      }else if (!item && e.target.innerHTML ==='') {
        e.target.innerHTML='O'
        setItem(!item)
        xo.current.innerHTML="X"
      }
    }
    var squre = []
    const end = function(num1,num2,num3) {
      squre[num1].style.background= '#000'
      squre[num2].style.background= '#000'
      squre[num3].style.background= '#000'
       setInterval(()=>{xo.current.innerHTML += '.'},1000)
       setTimeout(()=>{window.location.reload()},3000)
    }
    const winner = (e) => { 
      
      for (let i = 1; i < 10; i++) {
        squre[i] = document.getElementById('item'+i)
        
      }
        if(squre[1].innerHTML === squre[2].innerHTML && squre[2].innerHTML === squre[3].innerHTML && squre[1].innerHTML !==''){
          xo.current.innerHTML= `<span className='span'>${squre[1].innerHTML}</span> winner `
          end(1,2,3)
        }
        else if(squre[4].innerHTML === squre[5].innerHTML && squre[5].innerHTML === squre[6].innerHTML && squre[5].innerHTML !==''){
          xo.current.innerHTML= `${squre[5].innerHTML} winner `
          end(4,5,6)
        }
        else if(squre[7].innerHTML === squre[8].innerHTML && squre[8].innerHTML === squre[9].innerHTML && squre[7].innerHTML !==''){
          xo.current.innerHTML= `${squre[7].innerHTML} winner `
          end(7,8,9)
        }
        else if(squre[1].innerHTML === squre[4].innerHTML && squre[4].innerHTML === squre[7].innerHTML && squre[7].innerHTML !==''){
          xo.current.innerHTML= `${squre[4].innerHTML} winner `
          end(1,4,7)
        }
        else if(squre[2].innerHTML === squre[5].innerHTML && squre[5].innerHTML === squre[8].innerHTML && squre[8].innerHTML !==''){
          xo.current.innerHTML= `${squre[5].innerHTML} winner `
          end(2,5,8)
        }
        else if(squre[3].innerHTML === squre[6].innerHTML && squre[6].innerHTML === squre[9].innerHTML && squre[9].innerHTML !==''){
          xo.current.innerHTML= `${squre[3].innerHTML} winner `
          end(4,5,6)
        }
        else if(squre[1].innerHTML === squre[5].innerHTML && squre[5].innerHTML === squre[9].innerHTML && squre[9].innerHTML !==''){
          xo.current.innerHTML= `${squre[5].innerHTML} winner `
          end(1,5,9)
        }
        else if(squre[3].innerHTML === squre[5].innerHTML && squre[5].innerHTML === squre[7].innerHTML && squre[5].innerHTML !==''){
           
          xo.current.innerHTML= `${squre[3].innerHTML} winner`
          end(3,7,5)

        }
        else if(squre[1].innerHTML !=='' && squre[2].innerHTML !=='' && squre[3].innerHTML !=='' && squre[4].innerHTML !=='' && squre[5].innerHTML !=='' &&
        squre[6].innerHTML !=='' && squre[7].innerHTML !=='' && squre[8].innerHTML !=='' && squre[9].innerHTML !=='' 
        ){
          for(let i=1; i < 10; i++){
            squre[i].style.background = '#da1818'
          }
          setInterval(()=>{xo.current.innerHTML = 'No Winnaer'},1000)
          setTimeout(()=>{window.location.reload()},3000)

        }
      }
    


  return (
        <div className='container'>
                <div className='title'>
                <h3 ref={xo} id='test1'><span >XO</span> Game</h3>

              </div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item1' ></div>                
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item2'></div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item3'></div>

                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item4'></div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item5'></div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item6'></div>

                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item7'></div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item8'></div>
                <div onClick={(e)=>{itemHandler(e); winner(e)}} className='squre' id='item9'></div>
            </div>
  )
}

export default Game