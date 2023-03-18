import React from "react";

function Input({ onInputChange }) {
  return (
    <input
      type="text"
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Wpisz tu coś ładnego!"
    />
  );
}
export default Input;
/*Utwórz komponent Input (<input> typu text), który będzie przyjmował prop:

onInputChange - funkcję callbackową, która po każdym wpisanym znaku w pole <input>, przekaże wartość (value) inputu do komponentu rodzica i użyje w console.log().

Komponent Input powinien zwracać tag <input>.

Prop musi być przekazany przez rodzica. (<Input />)*/
