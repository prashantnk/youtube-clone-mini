import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onFormSubmit = async (data) => {

        const endPoint = "search";
        const options = {
            params: {
                q: data
            }
        };
        const result = await youtube.get(endPoint, options);
        this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <h3>Video Player</h3>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <h3>Showing {this.state.videos.length} videos </h3>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;