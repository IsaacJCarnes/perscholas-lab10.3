import { useContext } from "react";

import { FilterContext } from "../../context/AppProvider";

export default function ToDoFilter() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <form id="FilterForm">
      <button
        disabled={!filter["status"] || filter["status"] == ""}
        onClick={() => setFilter({ status: "" })}
      >
        All
      </button>
      <button
        disabled={filter["status"] == "active"}
        onClick={() => setFilter({ status: "active" })}
      >
        Active
      </button>
      <button
        disabled={filter["status"] == "completed"}
        onClick={() => setFilter({ status: "completed" })}
      >
        Completed
      </button>
    </form>
  );
}
