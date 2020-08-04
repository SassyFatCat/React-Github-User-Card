import React from 'react';

class SearchBar extends React.Component {
constructor() {
    super(); 
    this.state = {
        searchTerm: ''
    }
}


onChange = event => {
    this.setState({
        searchTerm: event.target.value
    })
}

onSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state.searchTerm)
}

render() {
    return (
        <div>
            <input
                type='text'
                placeholder='Username'
                onChange={this.onChange}
                value={this.state.searchTerm}
            ></input>
            <button onClick={this.onSubmit}>Search</button>
        </div>
    )
}
}

export default SearchBar