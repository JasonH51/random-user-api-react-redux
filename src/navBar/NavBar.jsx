import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import {getAllUsers} from '../api/randomUserApi';
import {useDispatch} from 'react-redux';
import {updateAllUsers} from '../redux/reducers/users';
import './css/navBar.css';
import RecentlyViewedModal from './components/RecentlyViewedModal';

const NavBar = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllUsers().then(data => {
      dispatch(updateAllUsers(data));
    });
  }, []);

  return (
    <nav>
      <div className="container-fluid navbar_container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="navbar_left_col">
              <h2>Random User API</h2>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="navbar_right_col">
              <Link className="navbar_tab" style={{textDecoration: 'none'}} to="/">
                Home
              </Link>

              <Link className="navbar_tab" style={{textDecoration: 'none'}} to="/dashboard">
                Dashboard
              </Link>

              <span
                className="navbar_tab recently_viewed_modal_toggle"
                onClick={() => setShowModal(true)}
              >
                Recently Viewed
              </span>

              {showModal && <RecentlyViewedModal setShowModal={setShowModal} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
