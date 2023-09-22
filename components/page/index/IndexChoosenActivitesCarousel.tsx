/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import CharityActivityCard from "@/components/domain/charity-activity/CharityActivityCard";

const activities = [
  {
    title: "Zakat Fidyah",
    collected: 30010000,
    target: 150000000,
    image: "/activities/program_zakat_fidyah.jpeg",
  },
  {
    title: "Zakat Emas",
    collected: 40000000,
    target: 120000000,
    image: "/activities/program_zakat_emas.jpeg",
  },
  {
    title: "Zakat Fitrah",
    collected: 50000000,
    target: 100000000,
    image: "/activities/program_zakat_fitrah.jpeg",
  },
  {
    title: "Qurban Penuh Cinta",
    collected: 35000000,
    target: 200000000,
    image: "/activities/program_qurban_yatim.jpg",
  },
  {
    title: "Wakaf Pembebasan Akses",
    collected: 35000000,
    target: 170000000,
    image: "/activities/program_wakaf_lahan.jpeg",
  }
];

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
        {activities.map((_item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "250px",
            }}
          >
            <CharityActivityCard
              title={_item.title}
              collected={_item.collected}
              target={_item.target}
              image={_item.image}
              link="/detail/slug"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IndexChoosenActivitesCarousel;
