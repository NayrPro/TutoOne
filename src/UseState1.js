import React, {useState, useEffect, useRef} from 'react'

function UseState1() {
    // const [answer, setAnswer] = useState("Yes")
    const [count, setCount] = useState(0)
    const [state, setState] = useState('')
    const [colorH1, setColor] = useState('')
    // function changement() {
    //      setAnswer(state) 
    // }
    function handlechange(event){
        const {value} = event.target
        setState(value)
    }
    const isInitialMount = useRef(true);

    // useEffect(() => {
    //     if (isInitialMount.current) {
    //      isInitialMount.current = false;
    //     } else {
    //         colorH1 === "" ? setColor("red") : setColor("")
    //     }
    // }, [answer]);

    function plus(){
        setCount(prevCount => 
            prevCount + 1
        )
    }
    // useEffect(
    //      () => {
    //                const intervalId = setInterval(plus,1000)
    //                return () => clearInterval(intervalId) 
    //      }, [])
    // useEffect(
    //      () => {
    //              console.log(count);
    //      }, [count])

    return (
        <div>
            <h1>Is state important to know? {/*<span style={{color: colorH1 }}>{answer}</span>*/} <span>{count}</span></h1>
                <input type="text" name="answer" id="answer" value={state} onChange={handlechange}/>
                {/* {<button name="answer" onClick={changement}>Submit</button>} */}
                <button name="plus" onClick={plus}> + </button>
            
        </div>
    )
}

export default UseState1
