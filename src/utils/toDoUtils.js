export function filterToDos(toDos, filter) {
  return toDos.filter((toDo) => toDo.status.includes(filter["status"] || ""));
}
