import React, {
    Component
} from "react";
import {
    connect
} from 'react-redux';
import Searchbox from "../components/Searchbox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import {
    setSearchField,
    requestRobots
} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}
class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {
            searchField,
            onSearchChange,
            robots,
            isPending,
            error

        } = this.props;
        const filteredArray = robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return isPending ? ( <
            h1 className = "heading" > Loading < /h1>
        ) : ( <
            div className = "main-div" >
            <
            h1 className = "heading" > RoboFriends < /h1> <
            Searchbox searchChange = {
                onSearchChange
            }
            /> <
            Scroll >
            <
            ErrorBoundry >
            <
            CardList robots = {
                filteredArray
            }
            /> < /
            ErrorBoundry > <
            /Scroll> < /
            div >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
