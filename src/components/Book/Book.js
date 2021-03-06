import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import style from './Book.module.css';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const handleRemovebtn = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className={style.bookCard}>
      <div className={style.bookinfo}>
        <ul>
          <li className={`${style.SchoolOf} ${style.TextStyle5}`}>Action</li>
          <li className={style.title}>{title}</li>
          <li className={`${style.SuzanneCollins} ${style.TextStyle6}`}>
            {author}
          </li>
        </ul>
        <ul className={style.btnHolder}>
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
          >
            Comments
          </button>
          <div className={style.divider} />
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
            onClick={handleRemovebtn}
          >
            Remove
          </button>
          <div className={style.divider} />
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
          >
            Edit
          </button>
        </ul>
      </div>
      <div className={style.bookProgress}>
        <div className={style.circularProgress} />
        <div className={style.progStats}>
          <div className={style.percentage}>64%</div>
          <div className={style.isCompleted}>Completed</div>
        </div>
        <div className={style.progDivider} />
        <div>
          <div className={style.currentChapter}>CURRENT CHAPTER</div>
          <div className={style.chapNumber}>Chapter 17</div>
          <div className={style.progressBtnDiv}>
            <button type="button" className={style.updateProgress}>
              Update Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
