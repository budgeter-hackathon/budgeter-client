import React, { useState } from "react";

const CategoryForm = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryBudget, setCategoryBudget] = useState("");

  const buttonHandle = (e) => {
    e.preventDefault();
    props.sendCategory(categoryName, categoryBudget);
    setCategoryName("");
    setCategoryBudget("");
  };

  const categoryNameHandle = (e) => {
    setCategoryName(e.target.value);
  };

  const categoryBudgetHandle = (e) => {
    setCategoryBudget(e.target.value);
  };

  return (
    <div className="container has-text-centered" id="categoryForm">
      <form onSubmit={buttonHandle}>
        <input
          className="input is-small"
          name="categoryName"
          placeholder="New Category Name"
          value={categoryName}
          onChange={categoryNameHandle}
          style={{ margin: "5px" }}
          required
        />
        <input
          className="input is-small"
          type="number"
          name="categoryBudget"
          placeholder="New Total Budget (USD)"
          value={categoryBudget}
          onChange={categoryBudgetHandle}
          style={{ margin: "5px" }}
          required
        />
        <button
          className="button is-small"
          style={{ margin: "5px" }}
        >
          Set Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
