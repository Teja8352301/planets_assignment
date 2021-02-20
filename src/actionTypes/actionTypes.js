import axios from "axios";
let type = "ADD_PLANETS";
export let addPlanets = () => {
  return dispatch => {
    // console.log("In the axios");
    axios
      .get("https://assignment-machstatz.herokuapp.com/planet")
      .then(response => {
        console.log(response.data);
        dispatch({ type: type, data: response.data });
      });
  };
};
