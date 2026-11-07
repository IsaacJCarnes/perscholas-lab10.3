export type ToDoStatus = "active" | "completed";

export interface ToDo {
  id: string;
  title: string;
  status: ToDoStatus;
}

export interface ToDoListProps {
  toDos: ToDo[];
  toggleTodo: (id:string) => void;
  onDelete: (toDoId: string) => void;
  onEdit: (toDoId: string) => void;
}

export interface ToDoItemProps {
  toDo: ToDo;
  toggleTodo: (id:string) => void;
  onDelete: (toDoId: string) => void;
  onEdit: (toDoId: string) => void;
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
