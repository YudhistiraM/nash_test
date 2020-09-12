import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './home.css';
import CardEvent from '../cardEvent/cardEvent.js';
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Home extends Component {
    componentDidMount() {
        this.props.actions.loadData();
    }

    render() {
        const { data, actions } = this.props
        let filterData = data
        let dataNodes = filterData.reverse().map((data, index) => {
            return (
                <CardEvent key={index} data={data} {...actions} />
            )
        })
        return (
            <Container style={{ display: 'flex', flexWrap: 'wrap', width: 'wrap-content' }}>
                {dataNodes}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)