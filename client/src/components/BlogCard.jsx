import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate(); // ✅ you forgot to call useNavigate()
  const { title, description, image, author, date, category, id } = blog; // ✅ added category and id destructure

  return (
    <div
      onClick={() => navigate(`/blog/${blog._id}`)} 
      className="w-full rounded-lg overflow-hidden shadow hover:shadow-[#5044E4]/25 transition-shadow duration-300 cursor-pointer"
    >
      <img src={image} alt="" className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-[#5044E4]/20 rounded-full text-[#5044E4] text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p className="mb-3 text-xs text-gray-600" dangerouslySetInnerHTML={{"__html":description.slice(0, 80)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;

