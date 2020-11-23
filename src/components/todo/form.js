import React, { useState, useEffect } from 'react';

export default function TodoForm() {
  const [item, setItem] = useState({});

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    handleSubmit(item);
    const items = {};
    setItem({ items });
  };

  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </label>
        <button id="addItem">Add Item</button>
      </form>
    </>
  );
}

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = (e) => {
//     this.setState({
//       item: { ...this.state.item, [e.target.name]: e.target.value },
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({ item });
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input
//               defaultValue="1"
//               type="range"
//               min="1"
//               max="5"
//               name="difficulty"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input
//               type="text"
//               name="assignee"
//               placeholder="Assigned To"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button id="addItem">Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

// export default TodoForm;
