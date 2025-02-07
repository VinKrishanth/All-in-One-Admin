import React, { useState } from "react";
import Cards from "../Cards";
import { cardDataStudent } from "../../../utils/NavigationLists";


export default function StudentList() {
  const [name, setName] = useState("");
  return (
    <div className="p-8">
      <Cards cardData={cardDataStudent} />
      <div className="pt-8 space-y-2 w-[80%]  flex justify-center items-center flex-col">
      
      </div>
    </div>
  );
}
