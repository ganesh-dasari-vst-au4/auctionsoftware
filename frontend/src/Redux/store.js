import { createStore } from "redux";
var sortBy = require("lodash").sortBy;

let inState = {
  projects: [],
  items: [],
  splice: 0,
};

const appReducer = (state = inState, action) => {
  let copy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "list":
      copy.projects = action.payload.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      copy.items = [];
      copy.items.push(copy.projects[copy.splice]);
      copy.items.push(copy.projects[copy.splice + 1]);
      return copy;

    case "sort":
      switch (action.payload) {
        case "category":
          copy.projects = sortBy(copy.projects, [
            function (o) {
              return o.category.c_name;
            },
          ]);
          break;

        case "username":
          copy.projects = sortBy(copy.projects, [
            function (o) {
              return o.user.u_name;
            },
          ]);
          break;

        case "project":
          copy.projects = sortBy(copy.projects, [
            function (o) {
              return o.p_name;
            },
          ]);
          break;

        default:
          copy.projects = copy.projects.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          break;
      }
      copy.items = [];
      copy.items.push(copy.projects[copy.splice]);
      copy.items.push(copy.projects[copy.splice + 1]);
      return copy;

    //   if (action.payload === "category") {

    //   } else if (action.payload === "username") {

    //   } else if (action.payload === "project") {

    //   } else {

    //   }

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
