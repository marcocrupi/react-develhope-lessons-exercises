import { useEffect, useMemo, useState } from "react";

const people = [
  { name: "Marco", age: 33, id: 1 },
  { name: "Vittorio", age: 26, id: 2 },
  { name: "Elena", age: 16, id: 3 },
  { name: "Grazia", age: 12, id: 4 },
  { name: "Danilo", age: 19, id: 5 },
];
export const FilteredList = ({ items = people }) => {
  const [list, setList] = useState(items);

  const filter = () => {
    return list.filter((person) => person.age > 18);
  };

  const result = useMemo(() => filter(), [list]);
  
  useEffect(() => {
    setList(result);
  }, [list]);

  return (
    <>
      <ul>
        {list.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FilteredList;
