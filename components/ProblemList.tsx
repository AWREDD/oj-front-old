import React from 'react'
import { Table } from '@arco-design/web-react';
import { Card, Link, Space } from '@arco-design/web-react';

const columns = [
  {
    title: '状态',
    dataIndex: 'status',
    filters: [
        {
          text: '完成',
          value: '完成',
        },
        {
          text: '未完成',
          value: '未完成',
        },
        
      ],
      onFilter: (value, row) => row.status.indexOf(value) > -1,
  },
  {
    title: '题目',
    dataIndex: 'title',
    sorter: (a, b) => a.title > b.title,
    
  },
  {
    title: '难度',
    dataIndex: 'level',
    filters: [
      {
        text: '简单',
        value: '简单',
      },
      {
        text: '普通',
        value: '普通',
      },
      {
        text: '困难',
        value: '困难',
      },
    ],
    onFilter: (value, row) => row.level.indexOf(value) > -1,
    filterMultiple: false,
  },
  {
    title: '通过率',
    dataIndex: 'ac_rate',
    sorter: (a, b) => a.ac_rate - b.ac_rate,
  },
];
const data = [
  {
    status: '完成',
    title: '两数之和',
    level: '简单',
    ac_rate: 0.9,
    
  },
  {
    status: '完成',
    title: '两数相加',
    level: '中等',
    ac_rate: 0.8,
    
  },
  {
    status: '未完成',
    title: '无重复字符串的最大整数',
    level: '中等',
    ac_rate: 0.6,
    
  },
  {
    status: '完成',
    title: '回文数',
    level: '简单',
    ac_rate: 0.9,
    
  },
  {
    status: '未完成',
    title: '寻找两个正序数组的中位数',
    level: '困难',
    ac_rate: 0.2,
    
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
