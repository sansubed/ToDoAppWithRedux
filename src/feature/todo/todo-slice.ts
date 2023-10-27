//slice is like a feature, you can have as many features.

import { createSlice } from "@reduxjs/toolkit";

interface toDoTask {
  name: string;
  status: false;
}

//dispatch function (state updating function): the function when useState is called that
//returns the state updating function
//lazy initialization -> assigning the value of variable as a call back
//function so that the value is only called when required.

/*
function: createSlice
inputs: 
name: name of the slice ; type:string
initialState: initial value of the state used by the reducer
reducers: this is an object 
            -> key is action name
            -> value is a reducer function <this dictates how the fucntion shall be changed>
*/
const todoSlice = createSlice({
  name: "todos",
  initialState: {} as toDoTask,
  reducers: {
    addTodo: () => {},
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
