// src/pages/BlogDetail.jsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { blogs, currentId } = location.state || {};

  if (!blogs || !currentId)
    return <p className="text-center mt-10">No blog selected!</p>;

  const currentBlog = blogs.find((b) => b.id === currentId);
  const otherBlogs = blogs.filter((b) => b.id !== currentId);

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row gap-8 min-h-screen px-6 py-12 mt-14">
        {/* Main Blog - 66% width on large screens */}
        <div className="lg:w-8/12 w-full">
          <img
            src={currentBlog.image}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="mt-6">
            <span className="text-sm text-purple-600 font-medium">
              {currentBlog.category}
            </span>
            <h1 className="text-4xl font-bold mt-3">{currentBlog.title}</h1>
            {currentBlog.description && (
              <p className="mt-4 text-gray-700 leading-relaxed">
                {currentBlog.description}
              </p>
            )}
            {currentBlog.author && (
              <p className="mt-3 text-gray-500 text-sm">
                {currentBlog.author} - {currentBlog.role} | {currentBlog.date} |{" "}
                {currentBlog.readTime}
              </p>
            )}
          </div>
        </div>

        {/* Sidebar - 33% width on large screens */}
        <div className="lg:w-4/12 w-full flex flex-col gap-6">
          <div className="w-full max-w-3xl mx-auto text-center py-0 px-">
            <div
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-300/40 
      rounded-2xl p-8 shadow-xl backdrop-blur-md"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Explore Our Latest{" "}
                <span className="text-purple-600">Blogs</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Insights, thoughts, and fresh ideas from our creative minds.
              </p>
            </div>
          </div>
          {otherBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-row gap-7 cursor-pointer p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white"
              onClick={() =>
                navigate("/blog-detail", {
                  state: { blogs, currentId: blog.id },
                })
              }
            >
              <img
                src={blog.image}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <div>
                <p className="text-md font-semibold">{blog.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {blog.date} • {blog.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
