import styles from "./Header.module.css";

const Header = ({value, onSearch}) => {
  return (
    <header className={styles.header}>
      <form onSubmit={e => e.preventDefault()} className={styles.container}>
        <input
          value={value}
          type="search"
          onChange={onSearch}
          className={styles.input}
          placeholder="Cari Catatan"
        />
      </form>
    </header>
  );
};

export default Header;
