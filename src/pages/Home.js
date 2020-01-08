import React from 'react'
import Autosuggest from 'react-autosuggest'
import Navbar from '../components/Navbar'
import Suggestion from '../components/Suggestion'
import OmdbAPI from '../services/omdb'

class Home extends React.Component {
    state = {
        query: '',
        suggestions: []
    }

    onChange = (event, { newValue }) => {
        this.setState({
            query: newValue
        })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        OmdbAPI.Search(value).then((response) => {
            this.setState({
                suggestions: response.data.Search || []
            })
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    }

    render() {
        return <div>
            <Navbar />
            <div className="jumbotron text-center">
                <h1 className="display-4">Search for movies</h1>
                <Autosuggest
                    inputProps={{
                        placeholder: 'Type a movie name, eg. Frozen',
                        value: this.state.query,
                        onChange: this.onChange,
                        className: 'form-control mt-4 w-50 mx-auto'
                    }}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    renderSuggestion={Suggestion}
                    suggestions={this.state.suggestions} />
            </div>
        </div>
    }
}

export default Home
