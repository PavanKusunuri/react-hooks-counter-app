import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <p> First Name is {name.firstName}</p>
        <p> Last Name is {name.lastName}</p>
      </form>
    </div>
  );
}

export default HookCounter3;
