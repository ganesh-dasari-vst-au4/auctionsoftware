import { createStore } from "redux";
let inState = {
  objectivefulltext: "",
  indication: "",
  therapeuticarea: "",
  s_objectivefulltext: "",
  s_indication: "",
  s_therapeuticarea: "",
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "add_objectivefulltext":
      copy.objectivefulltext = action.payload;
      return copy;

    case "add_indication":
      copy.indication = action.payload;
      return copy;

    case "add_therapeuticarea":
      copy.therapeuticarea = action.payload;
      console.log(copy);
      return copy;

    case "s_ta":
      copy.s_therapeuticarea = action.payload;
      console.log("changed", copy);
      return copy;

    case "s_in":
      copy.s_indication = action.payload;
      return copy;

    case "s_ob":
      copy.s_objectivefulltext = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);
export default store;
