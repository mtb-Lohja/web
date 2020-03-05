import React from "react";
import PostLinks from "../components/post-links";

const PostsPage = () => (
  <>
    <h2>Kaikki kirjoitukset</h2>
    <PostLinks filter="/uutiset" />
  </>
);

export default PostsPage;
