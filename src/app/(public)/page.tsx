import { getPosts } from '@/lib/posts';
import PostCard from '@/components/post/PostCard';
import { Post } from '@/types/posts';

export default async function PostsPage() {
  const posts = await getPosts() as Post[];
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
