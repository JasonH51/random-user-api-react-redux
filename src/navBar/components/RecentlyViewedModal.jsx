import React from 'react';
import {useSelector} from 'react-redux';
import '../css/recentlyViewedModal.css';
import ModalUser from './ModalUser';

const RecentlyViewedModal = ({setShowModal}) => {
  const {recentlyViewed} = useSelector(state => state.users);
  return (
    <>
      <div className="recently_viewed_backdrop">
        <div className="recently_viewed_main_container mx-3">
          <div className="recently_viewed_close_button">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="recently_viewed_title">
            <h1>Recently Viewed Users</h1>
          </div>
          <div className="recently_viewed_body container">
            <div className="row">
              {recentlyViewed.map(user => (
                <ModalUser key={user.login.username} user={user} setShowModal={setShowModal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentlyViewedModal;
