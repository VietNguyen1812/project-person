"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface IProps {
  blogs: IBlog[];
}
const AppTable = (props: IProps) => {
  const { blogs } = props;
  console.log("Blogs:", blogs);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map((blog) => {
          return (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>
                <Button>View</Button>
                <Button
                  variant="warning"
                  className="mx-3" //margin left 3 đơn vị
                >
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AppTable;
