import React, { Component } from 'react'
import {connect} from 'react-redux'

class NoteItem extends Component {

    twoActionbutton = () => {
        this.props.changeEditStatus();
        // console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }

    deleteData = () => {
       this.props.deleteData(this.props.note.key);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section2HeaderId">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href={"#number" + this.props.i} aria-expanded="true" aria-controls="section2ContentId">
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline btn-info" onClick={() => this.twoActionbutton()}>Edit</button>
                            <button className="btn btn-outline btn-danger" onClick={() => this.deleteData()}>Delete</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({
          type: "change_edit_status"
        })
      },
      getEditData: (editObj) => {
        dispatch({
          type: "get_edit_data",
          editObj
        })
      },
      deleteData: (id) => {
          dispatch({
              type: "delete_data",
              id
          })
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)