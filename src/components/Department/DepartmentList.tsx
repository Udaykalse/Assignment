
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const userdata = [{ name: 'civil' }, { name: 'pharma' }, { name: 'designing' }];

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListComponentProps {
  departments: Department[];
}

function DepartmentListComponent({ departments }: DepartmentListComponentProps) {
  const [users, setUsers] = useState([] as { name: string; isChecked?: boolean }[]);

  useEffect(() => {
    const allSubDepartments = departments.flatMap(department => department.sub_departments);
    const allUsers = userdata.map(user => ({ name: user.name, isChecked: allSubDepartments.includes(user.name) }));
    setUsers(allUsers);
  }, [departments]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'allSelect') {
      let tempUser = users.map(user => ({ ...user, isChecked: checked }));
      setUsers(tempUser);
    } else {
      let tempUsers = users.map(user => (user.name === name ? { ...user, isChecked: checked } : user));
      setUsers(tempUsers);
    }
  };

  return (
    <div className='container my-4' style={{ width: 400 }}>
      <form className='form'>
        <h2>Select</h2>
        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            style={{ margin: '0 0.25rem' }}
            onChange={handleChange}
          />
          <label className='form-check-label ms-2'>All Select</label>
        </div>
        {users.map((user, index) => (
          <div className='form-check' key={index}>
            <input
              type='checkbox'
              className='form-check-input'
              style={{ margin: '0 0.25rem' }}
              onChange={handleChange}
              name={user.name}
              checked={user.isChecked || false}
            />
            <label className='form-check-label ms-2'>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default DepartmentListComponent;

