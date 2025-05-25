import css from "./SearchBox.module.css";

export default function SearchBox({ value, onInput }) {
  const handleSearch = (e) => {
    onInput(e.target.value);
  };

  return (
    <div className={css.searchWrapper}>
      <label htmlFor="searchValue">Find contacts by name</label>
      <input
        type="text"
        id="searchValue"
        name="searchValue"
        className={css.input}
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
}
