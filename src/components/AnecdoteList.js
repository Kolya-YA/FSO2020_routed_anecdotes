import React from 'react'

import AnecdoteListItem from './AnecdoteListItem'

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <AnecdoteListItem key={anecdote.id} anecdote={anecdote} />)}
    </ul>
  </div>
)

export default AnecdoteList