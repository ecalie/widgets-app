import React, { useState } from "react";

import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is react ?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by creating components",
  },
];

const options = [
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
