import React, {useState, useEffect} from 'react';
import './css/landingPage.css';
import {useSelector} from 'react-redux';

const LandingPage = () => {
  const {allUsers} = useSelector(state => state.users);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const randomUsers = [];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 101);
      randomUsers.push(allUsers[randomNum]);
    }
    setUsers(randomUsers);
  }, [allUsers]);

  return (
    <div className="landing_div_grid">
      <div className="landing_div_one d-flex">
        <div className="landing_img_container">
          <img src={users[0]?.picture.large} alt="" />
        </div>
        <div className="px-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore praesentium veritatis. Rem qui et ex
            praesentium fugit reiciendis itaque dolor illum quidem minima, animi laborum dolorum
            esse, doloribus inventore quod culpa suscipit ad, amet optio. Exercitationem facilis
            sequi aliquam at accusantium mollitia explicabo itaque voluptate vel delectus officia,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure delectus maiores
            molestiae quo? Alias accusamus cumque mollitia fugiat non similique vitae perferendis
            facere
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore facere
          </p>
        </div>
      </div>
      <div className="landing_div_two">
        <div className="landing_img_container">
          <img src={users[1]?.picture.large} alt="" />
        </div>
        <div className="px-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore facere
          </p>
        </div>
      </div>
      <div className="landing_div_three">
        <div className="landing_img_container">
          <img src={users[2]?.picture.large} alt="" />
        </div>
        <div className="px-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore facere
          </p>
        </div>
      </div>
      <div className="landing_div_four d-flex">
        <div className="landing_img_container">
          <img src={users[3]?.picture.large} alt="" />
        </div>
        <div className="px-3">
          <p className="landing_content_removed_on_tablet">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore praesentium veritatis. Rem qui et ex
            praesentium fugit reiciendis itaque dolor illum quidem minima, animi laborum dolorum
            esse, doloribus inventore quod culpa suscipit ad, amet optio.
          </p>
          <p>
            Exercitationem facilis sequi aliquam at accusantium mollitia explicabo itaque voluptate
            vel delectus officia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure
            delectus maiores molestiae quo? Alias accusamus cumque mollitia fugiat non similique
            vitae perferendis facere Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="landing_div_five">
        <div className="landing_img_container">
          <img src={users[4]?.picture.large} alt="" />
        </div>
        <div className="px-3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore praesentium veritatis. Rem qui et ex
            praesentium fugit reiciendis itaque dolor illum quidem minima, animi laborum dolorum
            esse, doloribus inventore quod culpa suscipit ad, amet optio. Exercitationem facilis
            sequi aliquam at accusantium mollitia explicabo itaque voluptate vel delectus officia,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure delectus maiores
            molestiae quo? Alias accusamus cumque mollitia fugiat non similique vitae perferendis
            facere
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam earum rem maxime sit
            est, sunt deleniti exercitationem inventore facere
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
