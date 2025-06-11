"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("ViewDetailBlog props:", params.id);
  return (
    <div>
      <div className="my-3">
        <Link href="/blogs">Go Back</Link>
      </div>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ViewDetailBlog;
