import type { FilterProps, ToDo } from "../types";

export function filterToDos(toDos: Array<ToDo>, filter: FilterProps) {
  return toDos.filter((toDo) => toDo.status.includes(filter["status"] || ""));
}
