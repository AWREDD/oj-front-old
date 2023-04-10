import React from 'react'
import { Table } from '@arco-design/web-react';
import { Card, Link, Space } from '@arco-design/web-react';

const columns = [
  {
    title: '状态',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: '题目',
    dataIndex: 'salary',
    sorter: (a, b) => a.salary - b.salary,
    filters: [
      {
        text: '> 20000',
        value: '20000',
      },
      {
        text: '> 30000',
        value: '30000',
      },
    ],
    defaultFilters: ['20000'],
    onFilter: (value, row) => row.salary > value,
    sortDirections: ['ascend'],
    defaultSortOrder: 'ascend',
  },
  {
    title: '难度',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'Paris',
        value: 'Paris',
      },
    ],
    onFilter: (value, row) => row.address.indexOf(value) > -1,
    filterMultiple: false,
  },
  {
    title: '通过率',
    dataIndex: 'email',
    sorter: (a, b) => a.email.length - b.email.length,
  },
];
const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, Paris',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, Paris',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
];



export default function ProblemList() {
  return (
    <div className='m-4'>
    <Card
        
        className='card-custom-hover-style'
        
        hoverable
        
      >
        <Table columns={columns} data={data} />
    </Card>
    
    </div>
    
  )
}
