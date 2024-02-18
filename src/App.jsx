import React from "react";
import "./index.css";
function App() {
  const [sidebarButtonOpen, setSidebarButtonOpen] = React.useState(false);

  function clickHandler() {
    setSidebarButtonOpen((prevSidebarButton) => !prevSidebarButton);
  }

  const sidebarContent = (
    <div className="flex items-center justify-center bg-green-500 h-screen w-32">
      <p className="text-white text-2xl">Lorem ipsum dolor sit amet</p>
    </div>
  );

  return (
    <div>
      <div className="fixed inset-y-0 flex">
        {sidebarButtonOpen && sidebarContent}
        <button onClick={clickHandler} className="ml-2">
          {sidebarButtonOpen ? (
            <img src="../public/chevron-compact-left.svg" alt="" />
          ) : (
            <img src="../public/chevron-compact-right.svg" alt="" />
          )}
        </button>
      </div>

      <p className="ml-8 bg-blue-400 text-2xl w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quas eos
        corrupti rem ullam incidunt nulla culpa quod, minus non dolor molestiae
        voluptas error? Odit aliquam nulla natus inventore nostrum.
      </p>
    </div>
  );
}

export default App;
