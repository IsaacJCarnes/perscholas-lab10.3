import { useEffect, useState } from "react";
import type { FilterProps, ToDoFilterProps } from "../../types";

export default function ToDoFilter(props: ToDoFilterProps) {
  const [filter, setFilter] = useState<FilterProps>({});
  useEffect(() => {
    props.onFilterChange(filter);
  }, [filter]);

  return (
    <form id="FilterForm">
      <button disabled={!filter['status'] || filter['status'] == ""} onClick={() => setFilter({'status':''})}>All</button>
      <button disabled={filter['status'] == "active"} onClick={() => setFilter({'status':'active'})}>Active</button>
      <button disabled={filter['status'] == "completed"} onClick={() => setFilter({'status':'completed'})}>Completed</button>
    </form>
  );
}
