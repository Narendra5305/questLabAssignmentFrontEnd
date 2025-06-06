import { useState, useEffect, useRef, useReducer , useContext } from "react";
import "../component/userModal.css";


import { UserContext } from "../context/userContext";


const initialState = {
  first_name: "",
  last_name: "",
  profile_url: "",
  role: "",
  linkedin_url: "",
  twitter_url: "",
};

function Reducer(state, action) {
  switch (action.type) {
    case "Update Field":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "Reset Form":
      return initialState;
    default:
      return state;
  }
}




export const UserModel = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const [isOpen, setIsOpen] = useState(false);
    const { userData, addUser} = useContext(UserContext) ;
    const isOpenRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
        if (isOpenRef.current && !isOpenRef.current.contains(event.target)) {
            setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const handleChange = (e) => {
        dispatch({
        type: "Update Field",
        field: e.target.name,
        payload: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in state) {
        if (!state[key].trim()) {
            alert(`Please fill in ${key.replace("_", " ")}`);
            return;
        }
        }

    addUser(state)
    dispatch({ type: "Reset Form" });
    setIsOpen(false);
    };



  return (
    <div className="user-modal">
      <div className="add-resident-btn">
        <button style={{ display: isOpen ? "none" : "" }} onClick={() => setIsOpen(true)}> add resident</button>
      </div>

      {isOpen && (
        <div className="form-overlay">
          <div className="form-cont"  ref={isOpenRef}>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={state.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={state.last_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="profile_url"
                placeholder="Profile Pic Url"
                value={state.profile_url}
                onChange={handleChange}
              />
              <select name="role" value={state.role} onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="publisher">Publisher</option>
                <option value="writer">Writer</option>
              </select>
              <input
                type="text"
                name="linkedin_url"
                placeholder="LinkedIn Url"
                value={state.linkedin_url}
                onChange={handleChange}
              />
              <input
                type="text"
                name="twitter_url"
                placeholder="Twitter Url"
                value={state.twitter_url}
                onChange={handleChange}
              />
              <input type="submit" className="submit-btn" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
