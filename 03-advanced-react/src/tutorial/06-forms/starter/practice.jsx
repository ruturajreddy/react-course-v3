import { useState } from "react";

const Practice = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newUser = {
      id: data.length + 1,
      title: title,
      description: description,
    };
    const updatedUsers = [...data, newUser];
    setData(updatedUsers);
    setTitle("");
    setDescription("");
  };

  const removeUser = (id) => {
    const updatedUsers = data.filter((item) => item.id !== id);
    setData(updatedUsers);
  };

  const updateUser = (id) => {
    const updatedItem = data.find((item) => item.id === id);
    if (!updatedItem) return;

    const newTitle = prompt("Edit title:", updatedItem.title);
    if (newTitle !== null && newTitle !== "") {
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      );
      setData(updatedData);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>todo app</h4>
        <div className="form-row">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-input"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btn btn-block">submit</button>
      </form>
      <h2>todo list</h2>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {item.title} &rarr; {item.description}
            </h4>
            <button className="btn" onClick={() => removeUser(item.id)}>
              Remove
            </button>
            <button
              className="btn"
              style={{ marginLeft: "15px" }}
              onClick={() => updateUser(item.id)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Practice;
