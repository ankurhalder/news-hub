import React from "react";

function ScopeExample() {
  // Variables to display the results
  let resultVar = "";
  let resultLet = "";

  if (true) {
    var varNumber = 10;
    var letNumber = 40;
    resultVar = `Inside block: varNumber = ${varNumber}`;
    resultLet = `Inside block: letNumber = ${letNumber}`;
  }

  // Display results based on scope
  const outsideVarResult = `Outside block: varNumber = ${varNumber}`;
  const outsideLetResult =
    "Outside block: letNumber = Error: Variable not accessible";
  const outsideLetResult1 = `Outside block: letNumber = ${letNumber}`;
  let Number1 = 40;
  let String1 = "70";
  console.log(Number1 * String1);
  return (
    <div>
      <h1>Scope Example</h1>
      <p>{resultVar}</p>
      <p>{resultLet}</p>
      <p>{outsideVarResult}</p>
      <p>{outsideLetResult}</p>
      <p>{outsideLetResult1}</p>
      <p>{String1 - Number1}</p>
    </div>
  );
}

export default ScopeExample;
