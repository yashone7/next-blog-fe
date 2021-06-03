import React from "react";

const Posts = ({ data }) => {
  return (
    <div>
      {data.map((el) => {
        return (
          <div id={el._id} className="rounded shadow p-2 w-auto h-auto">
            <p> Title: </p>
            <h2> {el.title}</h2>
            <p>{el.data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
