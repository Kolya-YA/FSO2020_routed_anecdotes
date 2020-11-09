import React from 'react'

const Anecdote = ({ anecdote }) => (
  <article>
      <div>
        <strong>{anecdote.content}</strong> by <em>{anecdote.author}</em>
      </div>
      <div>has <strong>{anecdote.votes}</strong> votes</div>
      <div>
        more info <a href={anecdote.info}>{anecdote.info}</a>
      </div>
  </article>
)

export default Anecdote