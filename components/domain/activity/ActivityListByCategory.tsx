/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ActivityListByCategoryHeading from "@/components/domain/activity/ActivityListByCategoryHeading";
import ActivityCard from "@/components/domain/activity/ActivityCard";

// TODO: Use Real Data Later
import activities from "@/utils/zakatDummyData";

const ActivityListByCategory = () => {
  return (
    <div css={styles.container}>
      <ActivityListByCategoryHeading>
        Program Zakat
      </ActivityListByCategoryHeading>

      {/* Activity List */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        `}
      >
        <ActivityCard
          mode="horizontal"
          title={activities[0].title}
          target={activities[0].target}
          collected={activities[0].collected}
          image={activities[0].image}
          link={`/detail/${activities[0].slug}`}
        />
      </div>
    </div>
  );
};
export default ActivityListByCategory;

// Region: Styles
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  `,
};
