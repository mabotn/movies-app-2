import React from 'react'
import Navbar from '../components/Navbar'
import OmdbAPI from '../services/omdb'

const Columns = ["Title", "Year", "imdbRating", "Genre", "Runtime", "Director", "Actors", "Language"]

class Details extends React.Component {
    state = {
        details: {}
    }

    componentWillMount() {
        const movieID = this.props.match.params.id
        OmdbAPI.Details(movieID).then((response) => {
            this.setState({
                details: response.data
            })
        })
    }

    render() {
        return <div>
            <Navbar />
            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <img src={this.state.details.Poster} class="card-img-top" alt="..." />
                    </div>
                </div>

                <div className="col-md-8">
                    <ul class="list-group">
                        {Columns.map((column, index) => <li class="list-group-item d-flex justify-content-between align-items-center">
                            {this.state.details[column]}
                            <span class="badge badge-primary badge-pill">{column}</span>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Details
