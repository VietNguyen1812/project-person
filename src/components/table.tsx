"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ModalComponent from "./modal";
import { useState } from "react";
import UpdateModal from "./updateModal";
import Link from "next/link";
import { toast } from "react-toastify";

interface IProps {
  blogs: IBlog[];
}
const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const handleDetele = (id: number) => {
    if (confirm(`Are you sure you want to delete this blog = ${id}?`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Delete succeeded!...");
            // Refresh the data
            window.location.reload();
          }
        });
    }
  };
  console.log("Blogs:", blogs);
  return (
    <>
      <div
        className="mb-3" // margin bottom 3 đơn vị
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>
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
          {blogs?.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    href={`/blogs/${element.id}`}
                  >
                    View
                  </Link>

                  <Button
                    variant="warning"
                    className="mx-3" //margin left 3 đơn vị
                    onClick={() => {
                      setBlog(element);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDetele(element.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalComponent
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};

export default AppTable;
