export type ToDoStatus = "active" | "completed";

export interface ToDo {
  id: string;
  title: string;
  status: ToDoStatus;
}

export interface ToDoListProps {
  toDos: ToDo[];
  editId: number;
  onStatusChange: (toDoId: string, newStatus: ToDoStatus) => void;
  onDelete: (toDoId: string) => void;
  onEdit: (toDoId: string) => void;
}

export interface ToDoItemProps {
  editing:boolean
  toDo: ToDo;
  onStatusChange: (toDoId: string, newStatus: ToDoStatus) => void;
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
  onSubmitToDo: (toDo: ToDo) => void;
  nextId: string;
}
