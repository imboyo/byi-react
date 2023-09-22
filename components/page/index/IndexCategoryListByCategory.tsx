/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ActivityListByCategory from "@/components/domain/activity/ActivityListByCategory";
import zakatDummyData from "@/utils/zakatDummyData";

const activitiesByCategory = [
  {
    title: "Program Wakaf",
    items: [zakatDummyData[4]],
  },
  {
    title: "Program Zakat",
    items: [zakatDummyData[0], zakatDummyData[1], zakatDummyData[2]],
  },
  {
    title: "Program Qurban",
    items: [zakatDummyData[3]],
  },
];

const IndexCategoryListByCategory = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 3rem;
        padding-bottom: 3rem;
      `}
    >
      {activitiesByCategory.map((category) => (
        <ActivityListByCategory
          key={category.title}
          title={category.title}
          items={category.items}
        />
      ))}
    </section>
  );
};
export default IndexCategoryListByCategory;
