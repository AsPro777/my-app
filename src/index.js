import React from "react";
import { render } from "react-dom";
import News from './News';
import "./index.css";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState={items: []};

function reducer(state=initialState,action){ 

  switch(action.type){
    case 'ADD_NEWS': return {...state,items:[...state.items,action.newItem]}
	
	case 'DEL_NEWS':
		return {...state,items:[state.items.filter((item,index)=>{
		
	   if(item.id == action.delId) {return false}
  	   return true;  }) ][0]		
	  }
	
    default: { return state;}
  }
}

const store=createStore(reducer);
const App = () => (
  <Provider store={store}>
    <News />
  </Provider>
);

render(<App />, document.getElementById("root"));
