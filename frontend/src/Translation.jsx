import { Button, Hidden } from "@mui/material";
import { useEffect, useState, useRef } from "react";

export default function Translation() {
  const [sentence, setSentence] = useState(null);
  const [translatedSentence, setTranslatedSentence] = useState(null);
  const inputText = useRef();

  function submitHandler() {
    
        let preTranslatedSentence = {
          preTranslatedSentence: sentence,
        };
    
        fetch(process.env.REACT_APP_URL+`/toTranslate`, {
          method: "POST",
          body: JSON.stringify(preTranslatedSentence),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => setTranslatedSentence(result.response));
       }


  return (
    <div id="translation">
      <div className="textInputArea">
        <textarea
          ref={inputText}
          onChange={ (e) => setSentence(e.target.value)}
          placeholder="Write your sentences here and click translate button to see your translation."
          className="textField"
        ></textarea>
      </div>
      <div className="showTranslatedResult">
          {translatedSentence}
      </div>
      <Button
        onClick = {submitHandler}
        size="medium"
        variant="contained"
      >
        TRANSLATE
      </Button>
    </div>
  );
}
