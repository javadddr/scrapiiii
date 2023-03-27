import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MetalRow({ index, metals, formData, setFormData }) {
  const handleMetalChange = (event) => {
    const newMetals = [...metals];
    newMetals[index] = event.target.value;
    setFormData({ ...formData, metals: newMetals });
  };

  const handleKgChange = (event) => {
    const newKgs = [...formData.kgs];
    newKgs[index] = event.target.value;
    setFormData({ ...formData, kgs: newKgs });
  };

  const handlePriceChange = (event) => {
    const newPrices = [...formData.prices];
    newPrices[index] = event.target.value;
    setFormData({ ...formData, prices: newPrices });
  };

  const handleTotalPrice = (event) => {
    const newPrices = [...formData.prices];
    const newKgs = [...formData.kgs];
    const totalPrice = newPrices[index] * newKgs[index];
    const newTotalPrices = [...formData.totalPrices];
    newTotalPrices[index] = totalPrice;
    setFormData({ ...formData, totalPrices: newTotalPrices });
  };

  const handleRemoveRow = () => {
    const newMetals = [...formData.metals];
    const newKgs = [...formData.kgs];
    const newPrices = [...formData.prices];
    const newTotalPrices = [...formData.totalPrices];

    newMetals.splice(index, 1);
    newKgs.splice(index, 1);
    newPrices.splice(index, 1);
    newTotalPrices.splice(index, 1);

    setFormData({
      ...formData,
      metals: newMetals,
      kgs: newKgs,
      prices: newPrices,
      totalPrices: newTotalPrices,
    });
  };

  return (
    <tr>
      <td>
        <select value={formData.metals[index]} onChange={handleMetalChange}>
          <option value=""></option>
          {metals.map((metal) => (
            <option key={metal} value={metal}>
              {metal}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="number"
          min="0"
          value={formData.kgs[index]}
          onChange={handleKgChange}
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          step="0.01"
          value={formData.prices[index]}
          onChange={handlePriceChange}
          onBlur={handleTotalPrice}
        />
      </td>
      <td>{formData.totalPrices[index]}</td>
      <td>
        {index === 0 ? (
          <button type="button" onClick={() => setFormData({
            ...formData,
            metals: [...formData.metals, ""],
            kgs: [...formData.kgs, 0],
            prices: [...formData.prices, 0],
            totalPrices: [...formData.totalPrices, 0],
          })}>+</button>
        ) : (
          <button type="button" onClick={handleRemoveRow}>-</button>
        )}
      </td>
    </tr>
  );
}

function App() {
  const [formData, setFormData] = useState({
    date: new Date(),
    car: "",
    scrapyard: "",
    metals: ["", "", "", "", ""],
    kgs: [0, 0, 0, 0, 0],
    prices: [0, 0, 0, 0, 0],
    total: [0, 0, 0, 0, 0],
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleCarChange = (e) => {
    setFormData({ ...formData, car: e.target.value });
  };

  const handleScrapyardChange = (e) => {
    setFormData({ ...formData, scrapyard: e.target.value });
  };

  const handleMetalChange = (e, index) => {
    const metals = [...formData.metals];
    metals[index] = e.target.value;
    setFormData({ ...formData, metals });
  };

  const handleKgChange = (e, index) => {
    const kgs = [...formData.kgs];
    kgs[index] = parseFloat(e.target.value);
    const prices = [...formData.prices];
    prices[index] = kgs[index] * 2;
    const total = [...formData.total];
    total[index] = prices[index] * kgs[index];
    setFormData({ ...formData, kgs, prices, total });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      metals: [...formData.metals, ""],
      kgs: [...formData.kgs, 0],
      prices: [...formData.prices, 0],
      total: [...formData.total, 0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Metal Recycling Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label>Car:</label>
          <select value={formData.car} onChange={handleCarChange}>
            <option value=""></option>
            <option value="Car A">Car A</option>
            <option value="Car B">Car B</option>
            <option value="Car C">Car C</option>
          </select>
        </div>
        <div>
          <label>Scrapyard:</label>
          <select value={formData.scrapyard} onChange={handleScrapyardChange}>
            <option value=""></option>
            <option value="Scrapyard A">Scrapyard A</option>
            <option value="Scrapyard B">Scrapyard B</option>
            <option value="Scrapyard C">Scrapyard C</option>
          </select>
        </div>
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
  {formData.metals.map((metal, index) => (
    <MetalRow
      key={index}
      index={index}
      metal={metal}
      kg={formData.kgs[index]}
      price={formData.prices[index]}
      total={formData.total[index]}
      handleMetalChange={handleMetalChange}
      handleKgChange={handleKgChange}
      handlePriceChange={handlePriceChange}
      handleTotalChange={handleTotalChange}
      handleDeleteRow={handleDeleteRow}
    />
  ))}
</tbody>
<button type="button" onClick={handleAddRow}>
  Add Row
</button>
</table>
<button type="submit">Submit</button>
</form>
</div>
);
}
export default App;
           
