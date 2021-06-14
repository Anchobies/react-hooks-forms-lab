import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [currentItem, setCurrentItem] = useState({ id: uuid(), name: "name", category: "Produce" });

  function handleItemChange(event) {
    if (event.target.type === "text") {
      setCurrentItem({...currentItem, name: event.target.value});
    } else {
      setCurrentItem({...currentItem, category: event.target.value})
    }
  }

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onItemFormSubmit(currentItem);
    }} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
