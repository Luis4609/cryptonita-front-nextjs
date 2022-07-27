import { NextPage } from "next";

import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/sidebar";

const UserPage: NextPage = () => {
  return <div>index</div>;
};

export default UserPage;

UserPage.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
