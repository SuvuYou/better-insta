import { FC, useEffect, useState, useContext } from "react";
import {
  getPostsForUserByFollowings,
  getUserByUID,
} from "../../services/firebase";
import Skeleton from "react-loading-skeleton";
import Post from "./Post/Post";
import UserContext from "../../context/auth";

const Timeline: FC = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { activeUser: userProfile } = await getUserByUID(user.uid);
      if (userProfile[0].following && userProfile[0].following.length > 0) {
        const allPosts = await getPostsForUserByFollowings(
          userProfile[0].following
        );
        setPosts(allPosts.posts);
      }
      setIsLoading(false);
    })();
  }, [user]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {[...new Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            width={600}
            height={700}
            count={1}
            style={{ marginBottom: "24px" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {posts?.length === 0 && !isLoading ? (
        <>Follow people to see posts</>
      ) : (
        posts.map((post, index) => <Post key={index} postData={post} />)
      )}
    </div>
  );
};

export default Timeline;
