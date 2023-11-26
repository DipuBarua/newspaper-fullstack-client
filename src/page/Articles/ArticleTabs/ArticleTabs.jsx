import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ArticleCart from '../../Shared/ArticleCart/ArticleCart';

const ArticleTabs = ({ items }) => {

    return (
        <div>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper">

                <SwiperSlide>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {
                            items.map(item => <ArticleCart key={item._id} item={item}></ArticleCart>)
                        }
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default ArticleTabs;