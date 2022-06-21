import React from 'react';
import './css/profilePage.css';

const ProfilePage = ({location}) => {
  const {user} = location.state;

  // move to ultis module to reuse
  const parseDate = date => {
    const newDate = new Date(date).toDateString();
    const parseDate = new Date(newDate);
    const month = parseDate.getMonth() + 1;
    const day = parseDate.getDate();
    const year = parseDate.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const parseTimeTillBirthDay = dob => {
    const today = new Date();
    const bday = new Date(dob);
    const upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

    return parseDate(upcomingBday);
  };
  return (
    <div className="containter w-100">
      <div className="row">
        <div className="col-xs-12 col-md-3  my-auto">
          <div className="profile_img_container">
            <img className="profile_img" src={user.picture.large} alt="Profile" />
          </div>
          <div className="profile_img_container">
            <img className="profile_img" src={user.picture.medium} alt="Profile" />
          </div>
          <div className="profile_img_container">
            <img className="profile_img" src={user.picture.thumbnail} alt="Profile" />
          </div>
          <p className="text-center mt-3">
            Time until birthday: <span>{parseTimeTillBirthDay(user.dob.date)}</span>
          </p>
        </div>
        <div className="col px-4">
          <div className="profile_section row">
            <h3>Some Info</h3>
          </div>
          <div className="row">
            <div className="col profile_section_info">
              <p className="profile_section_key">
                Title: <span>{user.name.title}</span>
              </p>
              <p className="profile_section_key">
                First Name: <span>{user.name.first}</span>
              </p>

              <p className="profile_section_key">
                Last Name:<span>{user.name.last}</span>
              </p>
            </div>
            <div className="col profile_section_info">
              <p className="profile_section_key">
                Date of Birth: <span>{parseDate(user.dob.date)}</span>
              </p>
              <p className="profile_section_key">
                Age: <span>{user.dob.age}</span>
              </p>
              <p className="profile_section_key">
                Date Registered: <span>{parseDate(user.registered.date)}</span>
              </p>
            </div>
          </div>
          <div className="profile_section row">
            <h3>More Info</h3>
          </div>
          <div className="row">
            <div className="col profile_section_info">
              <p className="profile_section_key">
                Cell Phone: <span>{user.cell}</span>
              </p>

              <p className="profile_section_key">
                Home Phone: <span>{user.phone}</span>
              </p>
              <p className="profile_section_key">
                Email: <span>{user.email}</span>
              </p>
            </div>
            <div className="col profile_section_info">
              <p className="profile_section_key">
                Gender: <span>{user.gender}</span>
              </p>
              <p className="profile_section_key">
                Country: <span>{user.country}</span>
              </p>
              <p className="profile_section_key">
                Nat: <span>{user.nat}</span>
              </p>
            </div>
          </div>
          <div className="profile_section row">
            <h3>Even More Info..</h3>
          </div>
          <div className="row">
            <div className="col profile_section_info">
              <p className="profile_section_key">
                md5: <span>{user.login.md5}</span>
              </p>
              <p className="profile_section_key">
                Password: <span>{user.login.password}</span>
              </p>
              <p className="profile_section_key">
                Salt: <span>{user.login.salt}</span>
              </p>
            </div>
            <div className="col profile_section_info">
              <p className="profile_section_key">
                sha1: <span>{user.login.sha1}</span>
              </p>
              <p className="profile_section_key">
                Sha256: <span>{user.login.sha256}</span>
              </p>
              <p className="profile_section_key">
                Uuid: <span>{user.login.uuid}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
