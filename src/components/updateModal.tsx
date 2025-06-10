"use client";
"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"; // Keep only the toast import
import { mutate } from "swr";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  blog: IBlog | null;
  setBlog: (value: IBlog | null) => void;
}
const UpdateModal = (props: IProps) => {
  const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props;
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blog && blog.id) {
      // Populate fields with blog data when blog changes
      setId(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSumbit = () => {
    /**
     * Handles the submit action for updating a blog.
     * Validates input fields and sends a PUT request to update the blog.
     */
    // toast.success("Create succeeded!...");
    if (!title) {
      toast.error("Title is required!");
      return;
    }
    if (!author) {
      toast.error("Author is required!");
      return;
    }
    if (!content) {
      toast.error("Content is required!");
      return;
    }
    fetch(`http://localhost:8000/blogs/${id}`, {
      // Send PUT request to update the blog
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.warning("Update blog succeeded!...");
          handleClose();
          mutate("http://localhost:8000/blogs");
        }
      });
  };

  const handleClose = () => {
    /**
     * Closes the modal and resets input fields.
     */
    setTitle("");
    setAuthor("");
    setContent("");
    setBlog(null); // Reset the blog state
    setShowModalUpdate(false);
  };

  return (
    <Modal
      show={showModalUpdate}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New A Blog</Modal.Title>
        <Modal.Title>Update Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSumbit()}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
