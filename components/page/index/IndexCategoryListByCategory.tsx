/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ActivityListByCategory from "@/components/domain/activity/ActivityListByCategory";

const IndexCategoryListByCategory = () => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      `}
    >
      <ActivityListByCategory />
    </section>
  );
};
export default IndexCategoryListByCategory;
