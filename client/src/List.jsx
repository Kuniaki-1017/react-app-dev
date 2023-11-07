import React from "react";
import { useState } from "react";

const List = ({ name }) => {
  return (
    <ul>
      <li>{name}</li>
    </ul>
  );
};

export default List;
