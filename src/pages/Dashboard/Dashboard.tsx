import { FC, useEffect } from "react";
import Header from "../../components/Header/Header";
import Timeline from "../../components/Timeline/Timeline";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  gap: 15px;
  grid-template-columns: 66% auto;
`;

const Dashboard: FC = () => {
  useEffect(() => {
    document.title = "Dashboard - Better Insta";
  }, []);

  return (
    <div>
      <Header />
      <Grid>
        <Timeline />
        <Sidebar />
      </Grid>
    </div>
  );
};

export default Dashboard;
