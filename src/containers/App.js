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
    setSearchField
} from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }
    componentDidMount() {
        console.log(this.props.store);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users =>
                this.setState({
                    robots: users
                })
            );
    }

    render() {
        const {
            robots
        } = this.state;
        const {
            searchField,
            onSearchChange
        } = this.props;
        const filteredArray = robots.filter(robots => {
            return robots.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return !robots.length ? ( <
            h1 className = "f1" > Loading < /h1>
        ) : ( <
            div className = "tc" >
            <
            h1 className = "f1" > RoboFriends < /h1> <
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
