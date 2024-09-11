'use client'

import React, { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '@/app/data';
import Image from 'next/image';

const User = () => {
  const [name, setName] = useState(""); // to store the name
  const [imageUrl, setImageUrl] = useState(""); // to store the image url
  const fileInput = useRef<HTMLInputElement>(null); 

  // const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      setName("");
    },
  });

  if (status === "error") {
    return <div>{`Error: ${error}`}</div>;
  }

  const uploadImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const file = fileInput?.current?.files?.[0];
    if (file) {
      formData.append("file", file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }

    const response = await fetch("/api/users/image", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);


  }


  return (
    <div>
        <input
          type="text"
          placeholder="Enter name"
          className="w-800 p-2 border border-gray-300 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg" onClick={() => mutate(name)}>
          Submit
        </button>
        <p>
          { status === 'success' && <p>User created successfully</p> }
        </p>
        <br />
        <div>
          <form>
            <span>Upload Avatar</span>
            <input type="file" name="file" ref={fileInput}  />
            <button type="submit" className="p-2 flex bg-blue-500 text-white rounded-lg" onClick={(e) => uploadImage(e)}>Submit</button>
          </form>
        </div>
        {imageUrl && (
          <div>
            <Image src={imageUrl} alt="Avatar" width={400} height={600} />
          </div>
        )}
    </div>
  );
};

export default User;