import React, { useState } from "react";
import "./App.css"
function App() {
  const [metalRows, setMetalRows] = useState([
    { metal: "", kg: "", pricePerKg: "", totalPrice: "" },
    { metal: "", kg: "", pricePerKg: "", totalPrice: "" },
    { metal: "", kg: "", pricePerKg: "", totalPrice: "" },
    { metal: "", kg: "", pricePerKg: "", totalPrice: "" },
    { metal: "", kg: "", pricePerKg: "", totalPrice: "" }
  ]);

  const handleMetalChange = (index, field, value) => {
    const updatedRows = [...metalRows];
    updatedRows[index][field] = value;
    setMetalRows(updatedRows);
  };

  const addMetalRow = () => {
    setMetalRows([...metalRows, { metal: "", kg: "", pricePerKg: "", totalPrice: "" }]);
  };

  const metalOptions = ["Aluminium geschirr", "Mischschrott", "Schreddervormatarial", "Copper", "Blei"];
console.log(metalRows)
  return (
    <div className="container">
      <form>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="cars">Choose a Bee:</label>
        <select id="cars" name="cars">
          <option value="Choose a Bee">Choose a Bee</option>
          <option value="07 – Skinny (NE-SB-5605)">07 – Skinny (NE-SB-5605)</option>
          <option value="41 – Henry (NE-SB-5641)">41 – Henry (NE-SB-5641)</option>
          <option value="47 – Lesley (NE-SB 5647)">47 – Lesley (NE-SB 5647)</option>
        </select>

        <label htmlFor="scrapyard">Choose a scrapyad:</label>
        <select id="scrapyard" name="scrapyard">
          <option value="scrapyard1">Choose a scrapyad</option>
          <option value="Böhner Altmetalle GmbH"> Böhner Altmetalle GmbH</option>
          <option value="TSR Duisburg"> TSR Duisburg</option>
          <option value=" Motikat GmbH"> Motikat GmbH</option>
        </select>

        <table>
          <thead>
            <tr>
              <th>Type of metal</th>
              <th>KG</th>
              <th>Price/kg</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {metalRows.map((row, index) => (
              <tr key={index}>
                <td>
                  <select
                    value={row.metal}
                    onChange={(e) => handleMetalChange(index, "metal", e.target.value)}
                  >
                    <option value="">Select metal</option>
                    {metalOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={row.kg}
                    onChange={(e) => handleMetalChange(index, "kg", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.pricePerKg}
                    onChange={(e) => handleMetalChange(index, "pricePerKg", e.target.value)}
/>
</td>
<td>{row.totalPrice}</td>
</tr>
))}
</tbody>
</table>
<button type="button" onClick={addMetalRow}>
      Add row
    </button>

    <button type="submit">Submit</button>
  </form>
</div>
);
}

export default App;