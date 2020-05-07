import React, { Component } from 'react'
import {Alert, AlertContainer} from 'react-bs-notifier'
import {connect} from 'react-redux'

class AlertInfo extends Component {

    handleDismiss = () => {
        this.props.alertOff();
    }

    render() {
        if(this.props.alertShow === false) 
            return null
        return (
            <AlertContainer>
                <Alert type="info" onDismiss={() => this.handleDismiss()} timeout={3000}>{this.props.alertContent}</Alert>
            </AlertContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type: 'alert_off'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)