import { Typography, Grid, Box } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import NewsCard from "../../components/NewsCard";
import { NewsType } from "../../types/news";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";

export const getStaticProps: GetStaticProps = async () => {
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
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h2">News Page</Typography>
      <Grid container spacing={2}>
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
            key={news.id}
          ></NewsCard>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsPage;

NewsPage.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
