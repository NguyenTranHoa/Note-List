import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import {noteData} from './components/firebaseConnect'
import {connect} from 'react-redux'
import EditNote from './components/EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  showFormEdit = () => {
    if(this.props.isEdit) {
      return <EditNote/>
    }
  }

  addData = (item) => {
    noteData.push(item)
  }
  
  render() {
    const {addData} = this;
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // })
    return (
      <div>
          <Nav/>
          <h1>Hello</h1>
          <div className="container">
            <div className="row">
              <NoteForm addData={(item) => addData(item)} />
            </div>
            <hr/>
            <div className="row">
              <NoteList/>
              {this.showFormEdit()}
            </div>
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps)(App)
