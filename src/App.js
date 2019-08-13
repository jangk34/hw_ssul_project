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

// props는 부모에서 컴포넌트로 전달하기 위한 속성 -> ex) this.props.test
// state는 컴포넌트 내부에서 이동되는 값 p

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  }
})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '장창근',
  'birth': '930103',
  'gender': '남자',
  'job': '리액트신'
},
{
  'id': 5,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김박',
  'birth': '123123',
  'gender': '오리',
  'job': '철밥통'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '영니',
  'birth': '123123',
  'gender': '만리',
  'job': '철밥통'
}]

class App extends Component { //App클래스를 만들고 react component를 상속받아 새로운 클래스 생성하고 그 클래스는 render를 가지고있다 // 탬플릿과같음 
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
            { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/>);})}
            </TableBody>
        </Table>
     </Paper>
    );
  }
}

export default withStyles(styles) (App);  // withstyles 스타일을 적용하여 내보기
