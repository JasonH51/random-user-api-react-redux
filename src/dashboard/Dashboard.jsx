import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateSearch} from '../redux/reducers/users';
import SearchBar from './components/SearchBar';
import User from './components/User';
import './css/dashboard.css';
import Pagination from './components/Pagination';

const Dashboard = () => {
  const {renderUsers, page} = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [numOfPages, setNumOfPages] = useState();
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [pagiList, setPagiList] = useState([]);

  // can probably improve this section for performance
  useEffect(() => {
    setNumOfPages(Math.ceil(renderUsers.length / 10));
  }, [renderUsers]);

  useEffect(() => {
    setUsers(renderUsers.slice(page * usersPerPage - usersPerPage, usersPerPage * page));
  }, [renderUsers, page]);

  useEffect(() => {
    dispatch(updateSearch(searchValue));
  }, [searchValue]);

  useEffect(() => {
    setPagiList(new Array(numOfPages).fill(''));
  }, [numOfPages]);

  return (
    <div className="container-fluid position-relative pb-5">
      <div className="row">
        <div className="col d-flex justify-content-center m-4">
          <SearchBar {...{searchValue, setSearchValue}} />
        </div>
      </div>
      <div className="dashboard_users_list_container">
        {users.map(user => (
          <User key={user.login.username} user={user} />
        ))}
      </div>
      <Pagination pagiList={pagiList} />
    </div>
  );
};

export default Dashboard;
