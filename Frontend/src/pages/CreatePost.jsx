import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="bg-white flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg border border-gray-300">
        <h1 className="text-3xl text-center font-bold text-black">
          Create Post
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex gap-4  flex-col"
          action=""
        >
          <p htmlFor="file-1">
            Upload image <span className="text-destructive">*</span>
          </p>
          <Input type="file" placeholder="Enter text" accept="image/*" />
          <p htmlFor="file-1">
            Post <span className="text-destructive">*</span>
          </p>
          <Input placeholder="Enter text" />

          <Button className={"text-white"} type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
