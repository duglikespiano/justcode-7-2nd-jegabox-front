import React, { useState } from 'react';

function App() {
  return (
    <div>
      <div>예매 구매 내역</div>
      <div>
        <div>예매</div>
        <div>구매</div>
      </div>
      <div>
        <div>구분</div>
        <div>
          <input type="radio"></input>
          <label>예매내역</label>
          <input type="radio"></input>
          <label>예매내역</label>
          <select name="pets" id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <button>조회</button>
        </div>
      </div>
      <div>예매 내역이 없습니다</div>
    </div>
  );
}

export default App;
