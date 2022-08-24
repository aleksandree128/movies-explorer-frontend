import React from "react";
import "../SeacrhForm/seacrhForm.css";

function SearchForm(props) {
    return (
        <form className="searchForm">
            <div className="searchForm__main-string">
                <input
                    className="searchForm__input"
                    placeholder="Фильм"
                    minLength="2"
                    maxLength="30"
                    required
                ></input>
                <button type="submit" className="searchForm__button">Найти</button>
            </div>

            <div className="searchForm__switch-line">
                <label className="searchForm__switch">
                    <input type="checkbox" className="searchForm__switch-input" />
                    <span className="searchForm__switch-slider round"></span>
                </label>
                <p className="searchForm__switch-text">Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;

//<span className="form__switch-slider round"></span>
