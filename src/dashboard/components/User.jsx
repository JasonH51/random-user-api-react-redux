import React from 'react';
import '../css/user.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateRecentlyViewed} from '../../redux/reducers/users';
import {navigate} from '@reach/router';

const User = ({user}) => {
  const {recentlyViewed} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleRecentlyViewed = userData => {
    if (!recentlyViewed.includes(userData)) {
      dispatch(updateRecentlyViewed(userData));
    }
    navigate(`/profile/${user.login.username}`, {state: {user: user}});
  };

  return (
    <div
      onClick={() => handleRecentlyViewed(user)}
      className="col-xs-12 col-sm-6 col-md-4 user_main_container"
    >
      <div className="me-3 d-flex align-items-center">
        <img className="user_img" src={user.picture.medium} alt="profile" />
      </div>
      <div className="user_info_container">
        <h4 className="user_full_name_clamp">{`${user.name.first} ${user.name.last}`}</h4>
        {/* <h5 className="m-0">Location</h5>
        <p className="m-0">
          <b>City:</b> {user.location.city}
        </p>
        <p className="m-0">
          <b>State:</b> {user.location.state}
        </p>
        <p className="m-0">
          <b>Country:</b> {user.location.country}
        </p> */}
        <p className="mb-0">
          <b>Username:</b>
        </p>
        <p className="user_username mb-0">{user.login.username}</p>
      </div>
    </div>
  );
};

export default User;
