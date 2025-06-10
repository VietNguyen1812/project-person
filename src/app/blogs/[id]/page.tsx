const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("ViewDetailBlog props:", params.id);
  return <div>view detail ={params.id}</div>;
};
export default ViewDetailBlog;
