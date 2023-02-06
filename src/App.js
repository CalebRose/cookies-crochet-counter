import "./App.css";
import { PlusIcon } from "./PlusIcon";
import { MinusIcon } from "./MinusIcon";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  const Reset = () => setCount(() => 0);

  const Minus = () => {
    if (count === 0) return;
    setCount(() => count - 1);
  };

  return (
    <div className="App container-sm">
      <div className="row mt-1 justify-content-center d-flex">
        <div className="mt-3">
          <h1 className="title">Cookie's Crochet Counts</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <button type="button" className="btn btn-dark" onClick={Reset}>
              <h4>Reset Count</h4>
            </button>
          </div>
          <div className="col-md-4" />
          <div className="col-md-4"></div>
        </div>
        <div className="row vertical-align">
          <div className="col count">{count}</div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <button
              type="button"
              className="btn btn-white"
              onClick={() => setCount(() => count + 1)}
            >
              <PlusIcon height={128} width={128} />
            </button>
          </div>
          <div className="col mt-3">
            <button type="button" className="btn btn-white" onClick={Minus}>
              <MinusIcon height={128} width={128} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
