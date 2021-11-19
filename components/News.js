import React, { useState } from "react";
import {connect} from 'react-redux';

function News(props) {
  //const [count, setCount] = useState(0);

  const increment = () => {
    //setCount(count + 1);
    props.dispatch({type: 'INCREMENT'});
  };


 function NewsItem(props) {
	  let dat1=props.created.split('T');
      let dat2=dat1[1].split(':'); 
	   
	  return (
	  <div>
	    <h1 style={styles.head}>{props.title}</h1>
		<div style={styles.head}>{dat1[0]} {dat2[0]}:{dat2[1]}</div>
		<div style={styles.head}>От {props.author.name} {props.author.lastname}</div>
		<div style={styles.head}>{props.description}</div>
		<div style={styles.line}></div>
	  </div>
	  )
   }
   
   
   
    function Article(props) {
	  const items=props.items;
	  setLastId(props.items.length);
      const newsItems=items.map((art,ind) =>
		  <NewsItem key={art.id.toString()} 
		            title={art.title}
  					created={art.created_at}
					author={art.author}
					description={art.description}/>
	   );
	   return ( 
	          <div>
			    <button style={styles.but}
				        onClick={()=>{ setShowForm(true); }}
				>Добавить новость</button>
	            {newsItems}
			  </div>
              );
    }
	 


	 
	   

  return (
    <div>
      
      <div>
        <Article items={props.items} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>({items:state.items});

export default connect (mapStateToProps) (News);

