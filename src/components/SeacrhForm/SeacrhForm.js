import React from "react";
import "../SeacrhForm/seacrhForm.css";

function SearchForm({
                      handleSearchSubmit = () => {},
                      shortMovies = false,
                      checkBoxClick = () => {},
                      inputValue
                    }) {
  const [inputSearch, setInputSearch] = React.useState("");
  const [errorsSearchText, setErrorsSearchText] = React.useState("");

    function handleChangeInput(e) {
        setInputSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
      if (inputSearch === "") {
          setErrorsSearchText("Нужно ввести ключевое слово");
      } else {
          setErrorsSearchText("");
          handleSearchSubmit(inputSearch);
      }

  }

  React.useEffect(() => {
    setInputSearch(inputValue);
  }, [inputValue]);
  return (
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchForm__main-string">
            <div className="searchForm__container">
                <input
                    className="searchForm__input"
                    onChange={handleChangeInput}
                    name="film"
                    value={inputSearch || ""}
                    type="text"
                    maxLength="40"
                    placeholder="Фильм"
                ></input>
                <span className="searchForm__error round">{errorsSearchText}</span>
            </div>
          <button type="submit" className="searchForm__button">
            Найти
          </button>
        </div>

        <div className="searchForm__switch-line">
          <label className="searchForm__switch">
            <input
                type="checkbox"
                className="searchForm__switch-input"
                checked={shortMovies}
                onChange={checkBoxClick}
            />
            <span className="searchForm__switch-slider round"></span>
          </label>
          <p className="searchForm__switch-text">Короткометражки</p>
        </div>
      </form>
  );
}

export default SearchForm;
