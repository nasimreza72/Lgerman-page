import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div id="home">
      <h2>
        Welcome to the{" "}
        <span style={{ fontSize: "40px", fontWeight: 400 }}>L</span>
        <span
          style={{ fontSize: "35px", fontStyle: "italic", fontWeight: 500 }}
        >
          ge
        </span>
        <span
          style={{
            color: "red",
            fontSize: 35,
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          rm
        </span>
        <span
          style={{
            color: "#f9b248",
            fontSize: 35,
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          an
        </span>{" "}
        page
      </h2>

      <div style={{ margin: "2rem" }} className="mainBelowPart">
        <h4>Are you struggling with your German?</h4>

        <h4>
          {" "}
          <span style={{ fontSize: "35px", fontWeight: 400 }}>L</span>
          <span
            style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 500 }}
          >
            ge
          </span>
          <span
            style={{
              color: "red",
              fontSize: 25,
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            rm
          </span>
          <span
            style={{
              color: "#f9b248",
              fontSize: 25,
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            an
          </span>{" "}
          can help you :
        </h4>
        <ul>
          <li>learn basic german</li>
          <li>enhance your vocabulary</li>
          <li>translate from German to English</li>
          <li>improve your English vocabulary </li>
          <li>keep track of what you have learnt </li>
        </ul>
      </div>
    </div>
  );
}
