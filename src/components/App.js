import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";


class App extends React.Component {

    state = { videos: [] };

    onFormSubmit = async (data) => {

        const endPoint = "search";
        const options = {
            params: {
                q: data
            }
        };
        const result = await youtube.get(endPoint, options);
        this.setState({ videos: result.data.items })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <h3>Showing {this.state.videos.length} videos </h3>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;