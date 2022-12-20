import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextStudent } from "../../contexts/ContextStudent";

const EditStudent = () => {
  const { userEdit, saveNewUser } = useContext(ContextStudent);

  const navigate = useNavigate();

  console.log(userEdit);

  const [newEditItem, setNewEditItem] = useState(userEdit);

  function handleEditName(event) {
    let newName = {
      ...newEditItem,
      name: event.target.value,
    };
    setNewEditItem(newName);
  }

  function handleEditLastname(event) {
    let newLastname = {
      ...newEditItem,
      lastname: event.target.value,
    };
    setNewEditItem(newLastname);
  }

  function handleEditPhone(event) {
    let newPhone = {
      ...newEditItem,
      Phone: event.target.value,
    };
    setNewEditItem(newPhone);
  }

  useEffect(() => {
    setNewEditItem(userEdit);
  }, [userEdit]);

  return (
    <div>
      {newEditItem ? (
        <>
          <input
            type="text"
            placeholder="name"
            value={newEditItem.name}
            onChange={handleEditName}
          />
          <input
            type="text"
            placeholder="lastname"
            value={newEditItem.lastname}
            onChange={handleEditLastname}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={newEditItem.Phone}
            onChange={handleEditPhone}
          />
          <button onClick={() => saveNewUser(newEditItem)}>Save</button>
        </>
      ) : (
        <>
          {" "}
          LOADING ...{" "}
        </>
      )}
    </div>
  );
};

export default EditStudent;
