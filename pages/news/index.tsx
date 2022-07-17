import { Typography } from "@mui/material";
import type { NextPage } from "next";
import NewsCard from "../../components/NewsCard";
import { NewsType } from "../../types/news";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20"
  );
  const data: NewsType = await res.json();

  return {
    props: { newsinfo: data },
  };
};

const NewsPage: NextPage = ({ newsinfo }) => {
  return (
    <>
      <Typography variant="h2">News Page</Typography>
      {newsinfo.news.map((news: NewsType) => (
        <NewsCard
          id={news.id}
          feedDate={news.feedDate}
          source={news.source}
          title={news.title}
          icon={news.icon}
          imgUrl={news.imgUrl}
          description={news.description}
          link={news.link}
          coins={news.coins}
        ></NewsCard>
      ))}
    </>
  );
};

export default NewsPage;
