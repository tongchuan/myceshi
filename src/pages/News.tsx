import React, { useState, useEffect, useReducer } from 'react';
import { newsReducer, newsReducerInit } from '../reducer';
import newsAction from '../actions/newsAction';
import { initialInterface } from '../interface/newsInterface';
// import Navigation from '../components/Navigation';
import Test from '../components/Test';

function News() {
  const [store, dispatch] = useReducer(newsReducer, newsReducerInit);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prevCount) => (prevCount + 1));
  }, []);

  const butOnClick = () => {
    newsAction.getName().then((data) => {
      dispatch({
        type: 'abc',
        data: data as initialInterface
      });
    });
  };

  return (
    <div>
      {/*
        <Navigation />
      */}
      News
      {count}
      <p>this is storo is name: {store.name}</p>
      <div>
        <ul>
          {store.dataList.map((item, index) => (
            <li key={item.id}>
              {index < 9 ? `0${index + 1}` : `${index + 1}`} . name: {item.name} {item.age}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={butOnClick}>点击</button>
      <Test />
    </div>
  );
}

export default News;
