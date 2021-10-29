import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <SearchBar />
                Hello There !
            </div>
        );
    }
}

export default App;