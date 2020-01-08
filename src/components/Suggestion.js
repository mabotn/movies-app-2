import React from 'react'
import { Link } from 'react-router-dom'

const Suggestion = suggestion => (
    <Link to={"/details/" + suggestion.imdbID}>
        {suggestion.Title} ({suggestion.Year})
    </Link>
)

export default Suggestion
