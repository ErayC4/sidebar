import React from "react";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function clickHandler() {
    setSidebarOpen((prevSidebar) => !prevSidebar);
  }

  const sidebarContent = (
    <div
      className={`flex items-center justify-center bg-green-500 h-screen w-32 transition-all duration-300 ${
        sidebarOpen ? "ml-0" : "-ml-32"
      }`}
    >
      <p className="text-white text-2xl">Lorem ipsum dolor sit amet</p>
    </div>
  );

  return (
    <div>
      <div className="fixed inset-y-0 flex">
        {sidebarContent}
        <button onClick={clickHandler} className="ml-2 transition-all duration-300">
          {sidebarOpen ? (
            <img src="../public/chevron-compact-left.svg" alt="" />
          ) : (
            <img src="../public/chevron-compact-right.svg" alt="" />
          )}
        </button>
      </div>

      <p className="ml-8 bg-blue-400 text-2xl">
        Lorem ipsum
      </p>
    </div>
  );
}

export default App;
