import React from 'react'
import { useHistory } from 'react-router-dom'

import { useField } from '../hooks/index'

const CreateNew = props => {

  const content = useField('content', 'text')
  const author = useField('author', 'text')
  const info = useField('info', 'text')
  const resetForm = () => {
    content.onChange()
    author.onChange()
    info.onChange()
  }

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    history.push('/')
    props.setNotification(`A new anecdote ${content.value}`)
    setTimeout(() => {
      props.setNotification('')
    }, 10000)
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <label>
          content
          <input name={content.name} type={content.type} value={content.value} onChange={content.onChange} />
        </label><br />
        <label>
          author
          <input name={author.name} type={author.type} value={author.value} onChange={author.onChange} />
        </label><br />
        <label>
          url for more info
          <input name={info.name} type={info.type} value={info.value} onChange={info.onChange} />
        </label><br />
        <button>Create</button>
        <button type='reset' onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}

export default CreateNew