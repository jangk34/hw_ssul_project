import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { Button } from 'reactstrap';

// props는 부모에서 컴포넌트로 전달하기 위한 속성 -> ex) this.props.test
// state는 컴포넌트 내부에서 이동되는 값 p

class Subject extends Component {
  render() { // 최신버전이므로 자바스크립트 펑션 생략
    return (
        <header>
        <div classname="grey-background">
          <h1>{this.props.title}</h1>
          <h1>let's develop react</h1>  
        {this.props.sub}
          </div>
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    // const list = [
    //   <li><a href="1.html">HTML</a></li>,
    //   <li><a href="2.html">CSS</a></li>,
    //   <li><a href="3.html">JavaScript</a></li>
    // ];
    var list = [];
    var i = 0;
    while(i<this.props.data.length){
      var data = this.props.data[i];
      list.push(<li><a href={data.id+'.html'}>{data.title}</a></li>);
      i = i + 1;
    }
  
    return (
      <nav>
      <ol>
        {list}
      </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
    </article>
    );
  }
}
 
const customers = [{
  'id' : 18,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '장창근',
  'birth' : '930103',
  'gender' : '남자',
  'job' : '리액트신'
},
{
  'id' : 5,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '이협건',
  'birth' : '123123',
  'gender' : '쓰레기',
  'job' : '철밥통'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김영운',
  'birth' : '123123',
  'gender' : '개새끼',
  'job' : '철밥통'
}]


class App extends Component { //App클래스를 만들고 react component를 상속받아 새로운 클래스 생성하고 그 클래스는 render를 가지고있다 // 탬플릿과같음
  state = { // 컨테츠를 TOC에게 전달
      contents : [
        { id:1, title:'HTML', desc:'HTML is for information'},
        { id:2, title:'CSS', desc:'CSS is for information'},
        { id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is for information'}
      ]
  }
  render() {
    return (
      
      <div className="App">
      <Subject title="Web" sub="Hello, React"></Subject>

       <Toc data={this.state.contents}></Toc>
       <Content title="Lengend" desc="HTMl is for Hello" ></Content>

       <Button color="danger"> 신계입성 </Button>
       {/* <Customer
       name = {customer[0].name}
       image = {customer[0].image}
       id={customer[0].id}
       birth={customer[0].birth}
       gender={customer[0].gender}
       job={customer[0].job}
       ></Customer>  
        <Customer
       name = {customer[1].name}
       image = {customer[1].image}
       id={customer[1].id}
       birth={customer[1].birth}
       gender={customer[1].gender}
       job={customer[1].job}
       ></Customer>  
        <Customer
       name = {customer[2].name}
       image = {customer[2].image}
       id={customer[2].id}
       birth={customer[2].birth}
       gender={customer[2].gender}
       job={customer[2].job}
       ></Customer>    */}

       {
         customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name}
             birth={c.birth}
             gender={c.gender}
             job={c.job}
             />
           )
         })
       }
    
      </div>
    );
  }
}

export default App;
//module.exports = App;
