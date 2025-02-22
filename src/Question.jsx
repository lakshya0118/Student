import React, { useState } from 'react'
import $ from "jquery";

function Question() {

    const [qnum, setQum ]= useState(0);

    let [marks, setMarks] = useState(0);

    const [canswer, setCanswer] = useState ('');

    const [display, setDisplay ] = useState ('block');

    
    let questionArr = [
    {
            "title" : "What is HTML",
            "op1" : "Web Desgin",
            "op2" : "software Desgin",
            "op3" : "App Desgin",
            "op4" : "None of these",
            "ans" : "Web Desgin",
            "ngetiveMarks": 0.25
    },
    {
        "title" : "What is Heading Tag",
            "op1" : "<H1>",
            "op2" : "large heading",
            "op3" : "App Desgin",
            "op4" : "None of above",
            "ans" : "<H1>",
            "ngetiveMarks": 0.25
    
    },
    {
        "title" : "What is the correct HTML element for inserting a line break",
            "op1" : "<br>",
            "op2" : "<br/>",
            "op3" : "break",
            "op4" : "None of above",
            "ans" : "<br/>",
            "ngetiveMarks": 0.25
    
     },
     {
        "title" : "How can we learn",
            "op1" : "Learn  form Nikita Yadav",
            "op2" : "Learn  form Nikita Kadam",
            "op3" : "Learn  form Nikita Mam",
            "op4" : "Learn  form Veshu Kadam",
            "ans" : "Learn  form Nikita Mam",
            "ngetiveMarks": 0.25
    
     },
     {
        "title" : "What is HTML",
        "op1" : "Web Desgin",
        "op2" : "software Desgin",
        "op3" : "App Desgin",
        "op4" : "None of these",
        "ans" : "Web Desgin",
        "ngetiveMarks": 0.25
    },
    {
        "title" : "How can we learn",
            "op1" : "Learn  form Nikita Yadav",
            "op2" : "Learn  form Nikita Kadam",
            "op3" : "Learn  form Nikita Mam",
            "op4" : "Learn  form Veshu Kadam",
            "ans" : "Learn  form Nikita Mam",
            "ngetiveMarks": 0.25
    
     },
    
    ]

const [heading, setHeading] = useState(questionArr[qnum]);

function nextQuestion(){

    if(heading.ans == canswer){
        setMarks(++marks);
    } else{
        setMarks(marks - heading.ngetiveMarks)
    }

    if(qnum+1 >=questionArr.length){
       setDisplay('hidden');
        return false;
    }

    
    setQum(qnum+1);

    setHeading(questionArr[qnum+1]);

    $(".useranswer").prop("checked",false);
}


function setAnswer(ans){
    setCanswer(ans)
}

  return (
    <>

    <div className= {display}>
         <div className='text-start' >
        <div className='font-bold text-xl '>Welcome To Quiz</div>
        <div className='font-semibold text-xl mt-3'>Question {qnum+1} to {questionArr.length}</div>
      <div className='font-semibold text-xl  mt-5'>
       {heading.title}
      </div>

       <div className='grid grid-cols-2 text-start gap-3 w-[500px] mt-4'>
        <div className='border-solid border-2 border-black'>
            <input type='radio'  className='useranswer' name='answer'value={heading.op1}  onChange={() => setAnswer(heading.op1)} />{heading.op1}
        </div>

        <div className='border-solid border-2 border-black'>
            <input type='radio' className='useranswer' name='answer' value={heading.op2} onChange={() => setAnswer(heading.op2)} />{heading.op2}
        </div>

        <div className='border-solid border-2 border-black'>
            <input type='radio'className='useranswer' name='answer' value={heading.op3}  onChange={() => setAnswer(heading.op3)} />{heading.op3}
        </div>

        <div className='border-solid border-2 border-black'>
            <input type='radio' className='useranswer' name='answer'value={heading.op4}  onChange={() => setAnswer(heading.op4)} />{heading.op4}
        </div>
      </div> 

      <button type='button' className='bg-green-600 rounded p-2 w-[100px] mt-4' onClick={nextQuestion}>Next &gt;&gt;</button>
    </div>

    </div>

    <div className= {display == 'block'? 'hidden' : 'block'}>
        <p>Your Result Is : {marks}/{questionArr.length}</p>
    </div>
    </>
   
  )
}

export default Question
