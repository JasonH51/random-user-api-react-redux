import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updatePage} from '../../redux/reducers/users';
import '../css/pagination.css';

const Pagination = ({pagiList}) => {
  const {page} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handlePage = pageNum => {
    dispatch(updatePage(pageNum));
  };

  const handlePrev = () => {
    dispatch(updatePage(page - 1));
  };
  const handleNext = () => {
    dispatch(updatePage(page + 1));
  };

  return (
    <>
      <nav className="pagination_main_container" aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={handlePrev}>
              Previous
            </button>
          </li>
          {pagiList.map((item, i) => (
            <li key={i} className="page-item">
              <button
                className={`page-link ${i + 1 === Number(page) ? 'activePage' : ''}`}
                name={i + 1}
                onClick={e => handlePage(e.target.name)}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
