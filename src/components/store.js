import {noteData} from './firebaseConnect'

let redux = require('redux');
const noteInitialState = {
    isEdit: false,
    editItem: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'addData':
            noteData.push(action.getItem) 
            return state
        case 'change_edit_status':         
            return {...state, isEdit: !state.isEdit}
        case 'get_edit_data':         
            return {...state, editItem: action.editObj}
        case 'save_edit_data':
            noteData.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            }) 
            return {...state, editItem: {}}
        case 'delete_data':
            noteData.child(action.id).remove();
            return state
        default:
            return state
    }
}


let store = redux.createStore(allReducer);
// store.subscribe(function(){
//     console.log(JSON.stringify(store.getState()))
// })

export default store;