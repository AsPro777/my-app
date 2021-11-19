import React , { useState, useEffect, useRef } from 'react';

function Form() { alert(22);
  	return (<div>
	          <label>Название - <input type='text' /></label>
			  <label>Имя создателя - <input type='text' /></label>
			  <label>Фамилия создателя - <input type='text' /></label>
			  <label>Содержимое - <input type='text' /></label>
			  <button>Принять</button>
	        </div>)
}

export default Form;