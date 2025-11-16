export function addNote (content)
{
    return {
        type:"ADD_NOTE",
        payload: content
    }
}
export const deleteNote = (content) => ({
    type: "DELETE_NOTE",
    payload: content,
  });