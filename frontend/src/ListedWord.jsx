import { useState } from "react";

export default function ListedWord(props) {
  const [wordsList, setWordsList] = useState([]);
  const [germanWordsList, setGermanWordsList] = useState([]);
  const [hideList, setHideList] = useState(true);
  const [germanHideList, setGermanHideList] = useState(true);

  function getAllEnglishWords() {
    fetch(process.env.REACT_APP_URL + "/toEnglish")
      .then((response) => response.json())
      .then((result) => {
        setWordsList(result);
      });
    setHideList(true);
  }

  function getAllGermanWords() {
    fetch(process.env.REACT_APP_URL + "/toGerman")
      .then((response) => response.json())
      .then((result) => {
        setGermanWordsList(result);
      });
    setGermanHideList(true);
  }

  // function deleteWord(id) {
  //   fetch(process.env.REACT_APP_URL + `/deleteWord/${id}`)
  //     .then((res) => res.json())
  //     .then((result) => setWordsList(result));
  // }

  // function deleteGermanWord(id) {
  //   fetch(process.env.REACT_APP_URL + `/deleteGermanWord/${id}`)
  //     .then((res) => res.json())
  //     .then((result) => setGermanWordsList(result));
  // }

  function deleteWord(id) {
    let targetedId = {
      targetedId: id,
    };

    fetch(process.env.REACT_APP_URL + `/deleteWord`, {
      method: "DELETE",
      body: JSON.stringify(targetedId),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setWordsList(result));
  }

  function deleteGermanWord(id) {
    let targetedId = {
      targetedId: id,
    };

    fetch(process.env.REACT_APP_URL + `/deleteGermanWord`, {
      method: "DELETE",
      body: JSON.stringify(targetedId),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => setGermanWordsList(result));
  }

  return (
    <div id="listedWord">
      <div className="englishListedWords">
        <div>
          <button onClick={getAllEnglishWords}>English words</button>
          <button onClick={() => setHideList(false)}>hide list</button>
        </div>

        {hideList && (
          <ol className="wordsList">
            {wordsList.map((item) => (
              <li>
                {item.word[0].word}{" "}
                <button onClick={() => deleteWord(item._id)}>x</button>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="germanListedWords">
        <div>
          <button onClick={getAllGermanWords}>German words</button>
          <button onClick={() => setGermanHideList(false)}>hide list</button>
        </div>
        {germanHideList && (
          <ol className="wordsList">
            {germanWordsList.map((item) => (
              <li key={item._id}>
                {item.german_word[0].l1_text}{" "}
                <button onClick={() => deleteGermanWord(item._id)}>x</button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
