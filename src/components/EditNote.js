import React, { Component } from 'react'
import {connect} from 'react-redux'

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''
        }
        this.buttonRef = React.createRef();
    }

    componentWillMount() {
        this.setState({
            id: this.props.editItem.key,
            title: this.props.editItem.noteTitle,
            content: this.props.editItem.noteContent
        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    
    editItem = () => {
        let editObj = {};
        editObj.id = this.state.id;
        editObj.title = this.state.title;
        editObj.content = this.state.content;
        this.props.saveEditData(editObj);
        this.props.changeEditStatus();
        this.props.alertOn('Edit complete   !');
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            this.buttonRef.current.click();
        }
    }
    
    render() {
        return (
            <div className="col-4">
                <form>
                    <h3>Edit</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Title</label>
                        <input defaultValue={this.props.editItem.noteTitle}
                            onChange = {(event) => this.isChange(event)}
                            onKeyPress = {(event) => {this.handleKeyPress(event)}}
                        type="text" name="title" id="noteTitle" className="form-control" placeholder="Insert" aria-describedby="helpIdNoteTitpe"                      
                        />
                        <small id="helpIdNoteTitpe" className="text-muted">Dien tieu de vao day</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Content</label>
                        <input defaultValue={this.props.editItem.noteContent}
                            onChange = {(event) => this.isChange(event)}
                            onKeyPress = {(event) => {this.handleKeyPress(event)}}
                        type="text" name="content" id="noteContent" className="form-control" placeholder="Insert Content" aria-describedby="helpIdNotecontent" />
                        <small id="helpIdNotecontent" className="text-muted">Dien noi dung vao day</small>
                    </div>
                    <button type="reset" className="btn btn-primary btn-block"
                    onClick = {() => this.editItem()}
                    ref = {this.buttonRef}
                    >Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveEditData: (getItem) => {
            dispatch({type: 'save_edit_data', getItem})
        },
        changeEditStatus: () => {
            dispatch({type: 'change_edit_status'})
        },
        alertOn: (alertContent) => {
            dispatch({type: 'alert_on', alertContent})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
