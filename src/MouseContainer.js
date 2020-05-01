import React, { useState } from "react";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default MouseContainer;
