import React,{Component} from 'react'

import ReactDom from 'react-dom'

import Demo2 from '../components/demo2/demo2.js'

import TodoApp from '../components/todolist/todolist.js'

ReactDom.render((
	<TodoApp items={[]}/>
),document.getElementById('example'));

// ReactDom.render((
// 	<div>HELLO,WORLD</div>
// ),document.getElementById('example'));


ReactDom.render((
	<Demo2 text="我是猪子鱼222222"/>
),document.getElementById('example2'));