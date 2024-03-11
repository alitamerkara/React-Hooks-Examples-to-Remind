import React, { forwardRef } from "react";

const Example = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

export default Example;
