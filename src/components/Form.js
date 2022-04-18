import React,{useState, useEffect, useRef} from 'react';
import './Card.css';
import Image1 from './Image1';
import im from '../css/images/visa.png';
import im2 from '../css/images/chip.png';


export default function Form (){
    const[number,setNumber]=useState('');
    const[timeMonth,setTimeMonth]=useState('MM/');
    const[timeYear,setTimeYear]=useState('YY');
    const[name,setName]=useState('FULL  NAME');
    const [cvv, setCvv]=useState('');
    const[number1,setNumber1]=useState('####');
    const[number2,setNumber2]=useState('####');
    const[number3,setNumber3]=useState('####');
    const[number4,setNumber4]=useState('####');
    const[side, setSide]=useState(true);
    const [fon, setFon]=useState('card');
    
  function  changeMonth(e){
    setTimeMonth(e.target.value+'/')
  }
function changeTimeYear(e){
    setTimeYear(e.target.value)

}


    function changeValue(e){
        if(Number(e.target.value)){
setNumber(e.target.value);
setNumber1(e.target.value.slice(0,4));
setNumber2(e.target.value.slice(4,8));
setNumber3(e.target.value.slice(8,12));
setNumber4(e.target.value.slice(12,16));
        }
    
    }
          function changeCvv(e){
              setCvv(e.target.value);
          }
   
    function changeName(e){
        if(!Number(e.target.value)){
            setName((e.target.value).toUpperCase())        }
       else{
        setName('')        }


       

    }
    function closeCard()
    {
        
        setSide(!side)
    }
    function changeFon(e)
    {
        e.preventDefault();
       let n= Math.floor(Math.random() * (16 - 0)) + 0; 
       setFon('card '+' card'+(n.toString()))
    }
    
    return( 
    <>
             
           {
           (side ?
           (  <div className={fon} onClick={closeCard}   >
            <Image1 url={im2} className='chip' alt='chip'/>
            <Image1 url={im} className='visa' alt='visa'/>
           <div className='number'>
           <h3>{number1}</h3>
           <h3>{number2}</h3>
           <h3>{number3}</h3>
           <h3>{number4}</h3>
           </div >
           <div className='nameTimes'>
           <h2>{name}</h2>
           <h2>{timeMonth}{timeYear}</h2> 
           </div>
           </div>)
           :
           (<div onClick={closeCard} className={fon}>
           <div className='out'></div>
           <Image1 url={im} className='visa2' alt='visa'/>
           <div className='cvv'>CVV</div>               
           <div className='out2'> {cvv}</div>
             </div>)
                   )
         }
            <br />
            <form action="" >
            <button className='button' onClick={changeFon}>Змінити дизайн картки</button>
            <input  className='text-field__input' type="text" maxLength="16" onFocus={()=>setSide(true)} value ={number} placeholder='Введіть номер картки' onChange={changeValue}  />
            <br />
            <input className='text-field__input' type="text" value={name} maxLength="18" placeholder='Введіть ваше приізвище та ім`я' onFocus={()=>setSide(true)} onChange={changeName}  />
           <br />
           <label >Оберіть місяць:</label>
            <select className='text-field__input' onChange={changeMonth} onFocus={()=>setSide(true)} name="select" placeholder='Оберіть місяць'> 
      <option value="01"> 1</option>
      <option value="02"> 2</option>
      <option value="03"> 3</option>
      <option value="04"> 4</option>
      <option value="05"> 5</option>
      <option value="06"> 6</option>
      <option value="07"> 7</option>
      <option value="08"> 8</option>
      <option value="09"> 9</option>
      <option value="10"> 10</option>
      <option value="11"> 11</option>
      <option value="12"> 12</option>
</select>
<label >Оберіть рік:</label>
<select  className='text-field__input' onFocus={()=>setSide(true)} onChange={changeTimeYear} name="select2" > 

      <option value="22">2022</option>
      <option value="23">2023</option>
      <option value="24">2024</option>
      <option value="25">2025</option>
      <option value="26">2026</option>
      <option value="27"> 2027</option>
      <option value="28"> 2028</option>
      <option value="29"> 2029</option>
      <option value="30"> 2030</option>
      <option value="31">2031</option>
      <option value="32">2032</option>
</select>
<br />
<input  className='text-field__input'type="text" maxLength="4" onFocus={()=>setSide(false)}value ={cvv} placeholder='Введіть CVV картки' onChange={changeCvv}  />
            </form>
        
    
    </>
    )
    }
