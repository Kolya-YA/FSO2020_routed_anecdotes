import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteListItem = ({ anecdote }) => (
  <li>
    <Link to={`/anecdotes/${anecdote.id}`}>
      {anecdote.content}
    </Link>
  </li>
)

export default AnecdoteListItem