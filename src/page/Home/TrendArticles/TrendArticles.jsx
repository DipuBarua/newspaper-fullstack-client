import useArticles from "../../../hooks/useArticles";
import ArticleCart from "../../Shared/ArticleCart/ArticleCart";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TrendArticles = () => {
    const [articles] = useArticles();


    return (

        <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                articles.slice(1, 7).map(article =>
                    <SwiperSlide key={article._id}>
                        <ArticleCart key={SwiperSlide.index} item={article}>
                        </ArticleCart>
                    </SwiperSlide>)
            }
        </Swiper>



    );
};

export default TrendArticles;