import Container from '@/src/components/UI/Container';
import Post from '@/src/components/UI/Post';
import axiosInstance from '@/src/lib/AxiosInstance';
import { getPost } from '@/src/services/post';
import { IPost } from '@/src/types';

interface IProps {
  params: {
    itemId: string;
  };
}

const ItemDetailPage = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        <Post key={post?._id} post={post} />
      </div>
    </Container>
  );
};

export default ItemDetailPage;
