import React, { Component } from 'react';
import './paginate.css';
import { Pagination } from 'react-bootstrap';

class Paginate extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            currentPage: 1
        }
    }

    componentDidMount() {
        this.props.onChangePage(this.state.currentPage)
    }

    handleSwitchPage(selectedPage) {
        this.setState({ currentPage: selectedPage })
        this.props.onChangePage(selectedPage)
        this.scrollToTop()
    }

    handleNextPage() {
        this.setState({ currentPage: this.state.currentPage + 1 })
        this.props.onChangePage(this.state.currentPage + 1)
        this.scrollToTop()
    }

    handlePrevPage() {
        this.setState({ currentPage: this.state.currentPage - 1 })
        this.props.onChangePage(this.state.currentPage - 1)
        this.scrollToTop()
    }

    scrollToTop() {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }

    render() {
        const { numbersOfPage } = this.props
        let PageItems = numbersOfPage.map((x, i) => {
            return (
                <Pagination.Item
                    key={i}
                    active={this.state.currentPage === i + 1}
                    onClick={() => this.handleSwitchPage(i + 1)}
                >{i + 1}</Pagination.Item>
            )
        })
        return (
            <Pagination style={{ margin: '0 auto', width: 'fit-content' }}>
                <Pagination.Prev
                    onClick={this.handlePrevPage.bind(this)}
                    disabled={this.state.currentPage === 1}
                />
                {PageItems}
                <Pagination.Next
                    onClick={this.handleNextPage.bind(this)}
                    disabled={this.state.currentPage === numbersOfPage.length}
                />
            </Pagination>
        );
    }
}

export default Paginate;