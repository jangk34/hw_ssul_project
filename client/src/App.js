import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
//import { Button } from 'reactstrap';
import Table from '@material-ui/core/Table';  // 라이브러리 불러오기
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; // Paper는 컴포넌트 외부감싸기위해 사용
import CircularProgress from '@material-ui/core/CircularProgress';

// props는 부모에서 컴포넌트로 전달하기 위한 속성 -> ex) this.props.test
// state는 컴포넌트 내부에서 이동되는 값 p


// 리액트가 컴포넌트 실행할때 순서

// 1) constructor() 불러옴

// 2) componentWillMount() 불러옴

// 3) 컴포넌트를 화면에 그리고

// 4) render() 불러옴

// 5) componentDidMount() 불러옴

// 6) 컴포넌트의 props or state 변경할경우 => shouldComponentUpdate() 로 render()함수를 갱신해서 뷰를 재구성해서 보여줌


const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  },
  progress : {
    margin : theme.spacing.unit *2 // margin 주기
  }
});

class App extends Component { //App클래스를 만들고 react component를 상속받아 새로운 클래스 생성하고 그 클래스는 render를 가지고있다 // 탬플릿과같음 
 
  state = {
    customers: "",
    completed : 0
  }

  componentDidMount() {  // api를 불러와서 웹사이트 화면에 특정한 뷰를 출력하려고할때 마운트에서 api를 비동기적으로 호출
    this.timer = setInterval(this.progress, 20);  // 타이머로 0.02초마다 프로그래스 함수 실행
    // this.callApi()
    //   .then(res => this.setState({customers: res})) // 응답이 돌아온후 상태변화
    //   .catch(err => console.log(err));
    }
  

  callApi = async () => {
    const response = await fetch('/api/customers'); // 밑에서 위로
    const body = await response.json();  // 5000 에서 내용을 불러와 json형태로 변환하여 body함수에 담음 -> 전달
    return body;  //body 변수에 담음
  }

  progress = () => {
    const { completed } = this.state; // state 함수 가져올수있게
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }
 // state는 변수 변경 o
  //props는 변경 x
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> 번호 </TableCell>
              <TableCell> 이미지 </TableCell>
              <TableCell> 이름 </TableCell>
              <TableCell> 생년월일 </TableCell>
              <TableCell> 성별 </TableCell>
              <TableCell> 직업 </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>  
            {this.state.customers ? this.state.customers.map(c => {  // api 응답결과를 출력 , 응답 하지못한다면 로딩화면 출력
              return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/>);
            }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                   <CircularProgress className = {classes.progress} variant="determinate" value = {this.state.completed} />
                </TableCell>
              </TableRow> 
            }  
            </TableBody>
        </Table>
     </Paper>
    );
  }
}

export default withStyles(styles) (App);  // withstyles 스타일을 적용하여 내보기
