import React, { Component } from 'react'
import { noteData } from './firebaseConnect'
import NoteItem from './NoteItem';

export default class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    componentWillMount () {
        noteData.on('value', (notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const title = element.val().title;
                const content = element.val().content;
                arrayData.push({
                    key: key,
                    noteTitle: title,
                    noteContent: content
                });
            })
            this.setState({
                dataFirebase: arrayData
            })
        })
    }
    
    getData = () => {
        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem note={value} key={key} i={key} noteTitle={value.noteTitle} noteContent={value.noteContent} />
                )
            })
        }
    }

    render() {
        
        return (
            <div className="col">
                <h3>List</h3>
                <div id="accordianId" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        )
    }
}
