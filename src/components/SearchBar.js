import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "" };
        this.formRef = React.createRef();
    }
    componentDidMount() {
        this.formRef.current.addEventListener('submit', (e) => {
            e.preventDefault();
            this.props.onFormSubmit(this.state.data);
        })
    }
    render() {
        return (
            <div className="ui segment" style={{ marginTop: "20px" }}>
                <form className="ui form" ref={this.formRef}>
                    <div className="field">
                        <label htmlFor="inputBar">Youtube Search : </label>
                        <div className="ui icon input">
                            <input type="text" className="ui input" id="inputBar"
                                onChange={(e) => this.setState({ data: e.target.value })}
                                value={this.state.data}
                            />
                            <button type="submit" className="ui submit button">
                                <i className="search icon"></i>
                            </button>
                        </div>
                    </div>
                    <footer>{this.state.data.length === 0 ? "Input should not be empty !" : ""}</footer>
                </form>
            </div>
        );
    }
}

export default SearchBar;