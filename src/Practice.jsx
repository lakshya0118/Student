import React, {useState} from 'react'
import $ from "jquery";

function practice() {

  const[qnumber, setQnumber] = useState(0);
  let[marks, setMarks] = useState(0);
  const[countanswer, setCountanswer] = useState('');
  const[display, setDisplay] = useState('block');

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
]

  const[heading, setHeading] = useState(questionArr[qnumber]);


  function nextQuestion(){

    if(heading.ans == countanswer){
      setMarks(++marks);
    }else{
      setMarks(marks - heading.ngetiveMarks)
    }

    if(qnumber+1 >= questionArr.length){
      setDisplay('hidden');
      return false;
    }

    setQnumber(qnumber+1);

    setHeading(questionArr[qnumber+1]);

    $(".useranswer").prop("checked",false);

  }

  function setAnswer(ans){
    setCountanswer(ans)
  }

  return (
    <>

    <div className={display}>

      <div className='flex items-center justify-center mt-40'>
        <div className='w-[400px] h-[250px] bg-slate-300 rounded'>
            <p className='text-3xl font-bold mt-4 text-center'>Question {qnumber+1} to {questionArr.length} </p>
            <p className='text-2xl font-semibold mt-2 p-4'>{heading.title}</p>

          <div className='grid grid-cols-2 gap-3 text-xl p-3'>

            <div>
              <input type="radio" className='useranswer' name='answer' value={heading.op1} onChange={() => setAnswer(heading.op1)}/>{heading.op1}
            </div>

            <div>
              <input type="radio" className='useranswer' name='answer' value={heading.op2} onChange={() => setAnswer(heading.op2)}/>{heading.op2}
            </div>

            <div>
              <input type="radio" className='useranswer' name='answer' value={heading.op3} onChange={() => setAnswer(heading.op3)}/>{heading.op3}
            </div>

            <div>
              <input type="radio" className='useranswer' name='answer' value={heading.op4} onChange={() => setAnswer(heading.op4)}/>{heading.op4}
            </div>

          </div>

          <button type='button' className='w-full bg-red-400 h-10 text-white font-bold rounded' onClick={nextQuestion}>Next</button>

        </div>
      </div>

    </div>

        <div className={display == 'block'? 'hidden' : 'block'}>
            <p>Your Answer is {marks} / {questionArr.length}</p>
        </div>
      
    </>
  )
}

export default practice
