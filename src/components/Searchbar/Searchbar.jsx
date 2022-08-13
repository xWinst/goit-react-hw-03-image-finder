import React from 'react';
import s from './Searchbar.module.css';
import searchIcon from '../../images/search.svg';
import loadingicon from '../../images/loading.svg';

export default class Searchbar extends React.Component {
  render() {
    const { onSubmit, status } = this.props;
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={s.button}>
            {status === 'newSearch' ? (
              <img className={s.iconLoad} src={loadingicon} alt="loading" />
            ) : (
              <img className={s.icon} src={searchIcon} alt="search" />
            )}
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
