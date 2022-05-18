import { MouseEvent, MouseEventHandler, useCallback, useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css'
import Slider from './dist/main'
import styles from "./global/app.module.css"
import Board from './dist/components/comment/board';
import ExtendPage from './dist/components/extendPage';

function Test() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  },[]);

  return (
    <div>
      count:{state}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
      </header>

      {/* <Slider>
        {
          listData.List.map((item, index: number) => {
            return (
              <div key={index} className={`${styles.slick_items}`}>
                {item.Title}
              </div>
            )
          })
        }
      </Slider> */}
      {/* <Board></Board> */}
      <ExtendPage></ExtendPage>
    </div>
  );
}

export default App;
