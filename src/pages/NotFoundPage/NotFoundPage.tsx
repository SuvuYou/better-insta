import { FC, useEffect } from "react";

const NotFoundPage: FC = () => {
  useEffect(() => {
    document.title = "Not Found - Better Insta";
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ fontSize: "24px" }}>Not Found!</p>
    </div>
  );
};

export default NotFoundPage;
