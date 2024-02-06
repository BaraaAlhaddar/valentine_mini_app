import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App() {
  const [counter, setCounter] = useState(0);
  const [wordsArr, setWordsArr] = useState([
    "No",
    "are you sure?",
    "Really sure?",
    "Think again!",
    "Last Chance!",
    "surly note?",
    "you might regret this!",
    "give another thought!",
    "are you absolutely certain?",
    "this could be a mistake!",
    "have a heart!",
    "don't be so cold!",
    "change of heart?",
    "wouldn't you reconsider?",
    "is that your final answer?",
    'your breaking my heart :"(',
  ]);
  const [valentine, setValentine] = useState(false);
  const [declineWord, setDeclineWord] = useState("No");
  useEffect(() => {
    if (counter > wordsArr.length - 1)
      setDeclineWord(wordsArr[wordsArr.length - 1]);
    else setDeclineWord(wordsArr[counter]);
  }, [counter]);
  return (
    <div className="App">
      {!valentine ? (
        <>
          <img width={"300px"} src="/header_img.webp" />
          <p>Will you be my valentine?</p>
          <div className="d-flex gap-2">
            <Button
              style={{ fontSize: `calc(${counter + 1} * 1rem)` }}
              variant="success"
              onClick={()=>setValentine(true)}
            >
              Yes
            </Button>
            <Button
              style={{ height: "45px" }}
              onClick={() => setCounter(counter + 1)}
              variant="danger"
            >
              {declineWord}
            </Button>
          </div>
        </>
      ) : (
        <>
          <img width={"300px"} src="/final.webp" />
          <p>YAAAYY!!! LOVE YOU</p>
          <img width={"300px"} src="/final_2.webp" />


        </>
      )}
    </div>
  );
}

export default App;
