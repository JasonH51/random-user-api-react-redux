import React from 'react';
import '../css/modalUser.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateRecentlyViewed} from '../../redux/reducers/users';
import {navigate} from '@reach/router';

const ModalUser = ({user, setShowModal}) => {
  const {recentlyViewed} = useSelector(state => state.users);
  const dispatch = useDispatch();

  // refactor
  const handleRecentlyViewed = userData => {
    if (!recentlyViewed.includes(userData)) {
      dispatch(updateRecentlyViewed(userData));
    }
    setShowModal(false);
    navigate(`/profile/${user.login.username}`, {state: {user: user}});
  };
  return (
    <div onClick={() => handleRecentlyViewed(user)} className="modal_user_container col-xs-12">
      <div className="modal_user_content_container">
        <img className="modal_user_img" src={user.picture.medium} alt="profile" />
        <div className="modal_user_full_name user_full_name_clamp">
          <h4>{`${user.name.first} ${user.name.last}`}</h4>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
