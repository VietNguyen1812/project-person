"use client";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("ViewDetailBlog props:", params.id);

  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="my-3">
        <Link href="/blogs">Go Back</Link>
      </div>
      <Card>
        <Card.Header>Title: {data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Author : {data?.author}
        </Card.Footer>
      </Card>
    </div>
  );
};
export default ViewDetailBlog;
