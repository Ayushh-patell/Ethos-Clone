import React, { useContext } from "react";
import ArticleNav from "./Components/ArticleNav";
import ArticlePost from "./Components/ArticlePost";
import Footer from "../Footer";
import { posts } from "./PostData";
import { DarkModeContext } from "../Contexts/DarkModeContext";



const ArticlesPage = () => {
  const {Darkmode} = useContext(DarkModeContext)

  return (
    <div className={` w-full pl-16 ${Darkmode?" bg-black":""}`}>
      
      <div className=" grid xl:grid-cols-4 grid-cols-1">
        <div className=" h-80 bg-purple-800 xl:col-span-2 text-white flex flex-col justify-end p-4 font-semibold">
          <p>Interest-free loans. Personal sovereignty. </p>
          <h3 className=" text-2xl md:text-7xl">Sustainable, <span className=" opacity-25">resiliant DeFi</span> lending. </h3>
        </div>
        {posts.map((post, i) => (
            <ArticlePost key={i} profile={post.profile} name={post.name} title={post.title} date={post.date} time={post.time} tags={post.tags} src={post.src}/>

        ))}
      </div>
      <ArticleNav />
      <Footer/>
    </div>
  );
};

export default ArticlesPage;
