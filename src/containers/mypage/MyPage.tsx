import { Introduce, MyComments, MyLikes, MyPosts } from 'src/containers/mypage';

export const MyPage = () => {
  return (
    <>
      <Introduce />
      <MyPosts />
      <MyComments />
      <MyLikes />
    </>
  );
};
