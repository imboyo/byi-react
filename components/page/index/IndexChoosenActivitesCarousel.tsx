/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import CharityActivityCard from "@/components/domain/charity-activity/CharityActivityCard";

const IndexChoosenActivitesCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={15}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        css={css({
          height: "100%",
          width: "100%",
          cursor: "grab",
        })}
      >

        {/* TODO: Use Real Data Later with Map Looping */}
        {[...Array(10)].map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "250px",
            }}
          >
            <CharityActivityCard
              title="Zakat Fidyah"
              collected={3000000}
              target={6000000}
              image="/activites/program_wakaf_lahan.jpeg"
              link="/detail/slug"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IndexChoosenActivitesCarousel;
