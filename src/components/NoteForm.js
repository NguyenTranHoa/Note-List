import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
        this.buttonRef = React.createRef();
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = (noteTitle, noteContent) => {
        var item = {}
        if(noteTitle.trim() !== '' && noteContent.trim() !== '') {          
            item.title = noteTitle;
            item.content = noteContent;
            this.props.addData(item);
        }
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            this.buttonRef.current.click();
        }
    }

    resetState = () => {
        this.setState({
            noteTitle: '',
            noteContent: ''
        })
    }

    render() {
        const {noteTitle, noteContent} = this.state;
        const {addData, resetState, handleKeyPress} = this;
        return (
                <div className="col-6 mx-auto mb-5">
                    <form>
                        <h3>Add</h3>
                        <div className="form-group">
                            <label htmlFor="noteTitle">Title</label>
                            <input type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Insert" aria-describedby="helpIdNoteTitpe"
                            onChange={(event) => this.isChange(event)} 
                            onKeyPress = {(event) => handleKeyPress(event)}
                          
                            />
                            <small id="helpIdNoteTitpe" className="text-muted">Dien tieu de vao day</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="noteContent">Content</label>
                            <input type="text" name="noteContent" id="noteContent" className="form-control" placeholder="Insert Content" aria-describedby="helpIdNotecontent" 
                            onChange={(event) => this.isChange(event)} 
                            onKeyPress = {(event) => handleKeyPress(event)}/>
                            <small id="helpIdNotecontent" className="text-muted">Dien noi dung vao day</small>
                        </div>
                        <button type="reset" className="btn btn-primary btn-block"
                            onClick={() => {addData(noteTitle, noteContent); resetState()}} 
                            ref = {this.buttonRef}
                        >Save</button>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        test: state.testConnect
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (getItem) => {
            dispatch({type: 'addData', getItem})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)