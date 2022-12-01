import React, { useEffect, useRef, useState } from "react";

const CarDetails = ({
  initialData = { model: "Fiat 500", year: "2008", color: "yellow" },
}) => {
  const inputRef = useRef(null);
  const [isChanged, setStatus] = useState(false);

  useEffect(() => {
    inputRef.current.elements.model.value = initialData.model;
    inputRef.current.elements.year.value = initialData.year;
    inputRef.current.elements.color.value = initialData.color;
  }, []);

  useEffect(() => {
    if (isChanged === true) {
      inputRef.current.elements.model.value = "";
      inputRef.current.elements.year.value = "";
      inputRef.current.elements.color.value = "";
    } else return;
  }, [isChanged]);

  const handleChange = () => {
    setStatus(true);
  };

  return (
    <>
      <form ref={inputRef} onChange={handleChange}>
        <input type="text" name="model" />
        <input type="text" name="year" />
        <input type="text" name="color" />
      </form>
    </>
  );
};

export default CarDetails;
