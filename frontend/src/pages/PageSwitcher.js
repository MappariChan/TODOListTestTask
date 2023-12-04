import classes from "./PageSwitcher.module.css";

const PageSwitcher = ({ currentPage, setPage, pagesAmount }) => {
  const pages = [];
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(
      <button
        className={i === currentPage ? classes.active : ""}
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </button>
    );
  }
  return <div className={classes["pages-container"]}>{pages}</div>;
};

export default PageSwitcher;
