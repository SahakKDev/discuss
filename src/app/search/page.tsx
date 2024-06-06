import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";

interface Props {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams: { term } }: Props) {
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
