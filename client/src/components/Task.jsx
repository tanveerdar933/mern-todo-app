import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Task = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      // Implement validation and error handling
      return;
    }

    dispatch(addTask({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default Task