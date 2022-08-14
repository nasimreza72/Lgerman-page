import { Button, Hidden } from "@mui/material";
import { useEffect, useState, useRef } from "react";

export default function Translation() {
  const [sentence, setSentence] = useState(null);
  const [listOfSentences, setListOfSentences] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const [translatedSentence, setTranslatedSentence] = useState(null);
  const inputText = useRef();

  function submitHandler() {

    let preTranSentence = {
      preTranslatedSentence: sentence,
      preSelectedLanguage: selectedLanguage,
    }

    fetch(process.env.REACT_APP_URL + `/toTranslate`, {
      method: "POST",
      body: JSON.stringify({ preTranSentence }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.getList){ 
        setTranslatedSentence(result.result.text)
        }else{
        setTranslatedSentence(result.checkList)
        }
      })
      .catch(error => console.log(error))
  }

  function getSearchedHistory () {
    fetch(process.env.REACT_APP_URL + `/getSearchedHistory`)
    .then( res => res.json() )
    .then( result => setListOfSentences(result) )
    .catch(error => console.log(error))
  }
  console.log('setListOfSentences :>> ', listOfSentences);

  return (
    <div id="translation">
      <div className="leftSection">
        <div className="textInputArea">
          <textarea
            ref={inputText}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Write your sentences here."
            className="textField"
          ></textarea>
        </div>
        <div className="showTranslatedResult">
          {translatedSentence}
          <select
            onChange={(e) => setSelectedLanguage(e.target.value)}
            name="selectLanguage"
            id=""
          >
            <option value="">Select a language</option>
            <option value="en-US">English</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="es">Spanish</option>
            <option value="pt-PT">Portuguese</option>
            <option value="fr">French</option>
            <option value="el">Greek</option>
          </select>
        </div>
        <Button className="translateButton" onClick={submitHandler} size="medium" variant="contained">
          TRANSLATE
        </Button>
        <Button onClick={getSearchedHistory} size="medium" variant="contained">
          SEARCHED HISTORY
        </Button>
      </div>
      <div className="rightSection">
        <h6>History of Previously translated sentences:</h6>
        <div className="showTranslatedResult">
          {listOfSentences && listOfSentences.reverse().map(i=> {
           return <p>{i.listedSentence} <hr/> </p>
          })}
        </div>
      </div>
    </div>
  );
}
