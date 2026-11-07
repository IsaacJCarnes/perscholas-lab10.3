export type ToDoStatus = "active" | "completed";

export interface ToDo {
  id: number;
  title: string;
  status: ToDoStatus;
}

export interface ToDoListProps {
}

export interface ToDoItemProps {
  toDo: ToDo;
}

export interface FilterProps {
  status?: string;
}

export interface ToDoFilterProps {
  onFilterChange: (filters: FilterProps) => void;
}

export interface ToDoFormProps {
  addTodo: (text:string) => void;
}
