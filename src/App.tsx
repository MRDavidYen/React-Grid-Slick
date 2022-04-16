import React from 'react';
import logo from './logo.svg';
import './App.css'
import listData from "./const/data.json"
import Slider from './dist/main'
import styles from "./global/app.module.css"

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <Slider>
        {
          listData.List.map((item, index: number) => {
            return (
              <div key={index} className={`${styles.slick_items}`}>
                {item.Title}
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default App;
