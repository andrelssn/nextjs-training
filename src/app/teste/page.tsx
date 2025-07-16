'use client'

import React, { useEffect, useState } from 'react'

export default function PageTeste() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts));
    }, []);

  return (
    <div>
        <div>
            {posts.map((data: any) => (
                <span key={data.id}>
                    {data.title}<br/>
                </span>
            ))}
        </div>
    </div>
  )
}
