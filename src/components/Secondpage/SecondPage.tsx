
import React, { useEffect, useState } from 'react';
import DepartmentListComponent from '../Department/DepartmentList';
import data from '../data.json';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function SecondPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    setPosts(data);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>JSON DATA</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>userId</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>id</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{post.userId}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{post.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{post.title}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <DepartmentListComponent departments={[]} />
    </div>
  );
}

export default SecondPage;

