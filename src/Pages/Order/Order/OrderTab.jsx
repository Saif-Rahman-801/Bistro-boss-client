import PropTypes from "prop-types";
import FoodCard from "../../Shared/FoodCard/FoodCard";
/* import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules'; */

const OrderTab = ({ items }) => {
  /* const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  }; */
  return (
    <div className="grid grid-cols-3 space-y-5">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}

      {/* <Swiper
            pagination={pagination}
            modules={[pagination]}
            className="mySwiper"
            >
              <SwiperSlide>

              </SwiperSlide>
            </Swiper> */}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default OrderTab;
