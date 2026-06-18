'use client';
import { useState } from 'react'
import {motion} from 'framer-motion'

function Front() {
    const [ frontimage , setfrontimage] = useState(false);
    const [ h , seth ] = useState(false);
    const [ delta , setdelta ] = useState(1)
    const Ex1 = [
      {
        // pack
      image : '/pack.png',
      headilne:'Pack',
      ex01: 'Banch Press',
      ex02: 'Kourti Kouchi',
      ex03: 'Depps',
      img1:'/p1.png',
      img2:'/p2.png',
      img3:'/p3.png',
      },
      {
        // pole
      image : '/pole.png',
      headilne:'Pole',
      ex01: 'Arnold Splete ',
      ex02: ' pole dumbels',
      ex03: 'Pole Bar',
      img1:'/pl1.png',
      img2:'/pl2.png',
      img3:'/pl3.png',
      },
      {
      
          // doroso
          image : '/back.png',
          headilne:'Back',
          ex01: 'Let Pull Down',
          ex02: '  bar Rows',
          ex03: 'One singel Row',
          img1:'/b1.png',
          img2:'/b2.png',
          img3:'/b3.png',
          },
      
          ]
   

  return (
    <div>

        {/*  the front image and the intial  */}
        { frontimage ? <div className = ' h-[90vh] w-full flex justify-center items-center' > 
        
        <img src='/1.png' alt="the whole nody image " className=' h-[90vh] ' />
        
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[55%] right-[52%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Jomba ariier </motion.div> </div></motion.button>
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[40%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Ombare </motion.div> </div></motion.button>
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[30%] right-[54%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Trisapes </motion.div> </div></motion.button>
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[20%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Trapaise </motion.div> </div></motion.button>
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[20%] right-[53%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8 -ml-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Pole ariier</motion.div> </div></motion.button>
        <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[29%] right-[46%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}} onClick={() => { seth(prev => !prev) , setdelta(2)}}>  <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Lates</motion.div> </div></motion.button>

        
        
        
        
        
        
        
        
        
        
        
        </div> : 

        <div className = ' h-[90vh] w-full flex justify-center items-center'>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[55%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Jomba </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[75%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > moli </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[37%] right-[50%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > abdo </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center  absolute top-[28%] right-[45%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > bocebse </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[22%] right-[47%] ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > pack </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[18%] right-[53%] ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}  onClick={() => { seth(prev => !prev) , setdelta(1)}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > pole avant </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[19%] right-[55%]  ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  -ml-10  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > pole atiral </motion.div> </div></motion.button>
          <motion.button className='border-black border-[1px] border-solid rounded-full w-5 h-5 bg-red-600 opacity-100 flex items-center justify-center absolute top-[36%] right-[57%] ' animate={{backgroundColor:'orange' , opacity: 0.4}} transition={{ duration:2.1 , repeat: Infinity  }} whileHover={{opacity:1}}> <div className=' bg-red-700 w-3 h-3 rounded-full border-[1px] border-black border-solid  '> <motion.div className=' h-10 w-16 bg-black text-white text-center -mt-8  rounded-lg flex items-center justify-center' initial={{opacity:0}} whileHover={{opacity:1}} > Avombra </motion.div> </div></motion.button>



<img src='/2.png' alt="the whole nody image " className=' h-[90vh] ' />

        </div>
        
}



        <button onClick={ () => {
  setfrontimage(prev => !prev)
  console.log(frontimage)}} className=' absolute right-4 top-28 bg-red-400 rounded-md '>Click To return</button>



        
            
{ h ? <div className=' w-[30vw] h-[100vh] py-3 px-5 flex flex-col items-center bg-black absolute top-0 left-0  '>
<img src={Ex1[delta].image} alt="" className=' h-[50vh] ' />
<div className=' flex justify-evenly items-center w-full h-[15vh] '>
    <img src={Ex1[delta].img1} alt="" className=' h-[15vh] ' />
    <p className=' text-white'> {Ex1[delta].ex01} </p>

</div>
{/* /////////////// */}
<div className=' flex justify-evenly items-center w-full h-[15vh] '>
    <img src={Ex1[delta].img2} alt="" className=' h-[15vh] ' />
    <p className=' text-white'> {Ex1[delta].ex02} </p>

</div>




 <div className=' flex justify-evenly items-center w-full h-[15vh] '>
    <img src={Ex1[delta].img3} alt="" className=' h-[15vh] ' />


<p className=' text-white'> {Ex1[delta].ex03} </p>

</div>






    </div> : 

    <div>

    </div> 
    }

    



    </div>
  )
}

export default Front