import React from "react";
import MultiStepForm from "./MultiStepForm";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="w-2/3 min-h-[90vh] overflow-hidden bg-white border rounded-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
