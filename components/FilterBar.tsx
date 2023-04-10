import React from 'react'
import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
import { Input, Radio} from '@arco-design/web-react';
import { IconRefresh } from '@arco-design/web-react/icon';
const RadioGroup = Radio.Group;
const InputSearch = Input.Search;
const dropList_problems = (
    <Menu>
      <Menu.Item key='1'>两数之和</Menu.Item>
      <Menu.Item key='2'>两数相加</Menu.Item>
      <Menu.Item key='3'>回文数</Menu.Item>
      <Menu.Item key='4'>寻找两个正序数组的中位数</Menu.Item>
      <Menu.Item key='5'>无重复字符串的最大整数</Menu.Item>
    </Menu>
  );
const dropList_level = (
    <Menu>
      <Menu.Item key='1'>简单</Menu.Item>
      <Menu.Item key='2'>普通</Menu.Item>
      <Menu.Item key='3'>困难</Menu.Item>
    </Menu>
);

const dropList_status = (
    <Menu>
      <Menu.Item key='1'>完成</Menu.Item>
      <Menu.Item key='2'>未完成</Menu.Item>
    </Menu>
);
const dropList_tags = (
    <Menu>
      <Menu.Item key='1'>蓝桥杯</Menu.Item>
      <Menu.Item key='2'>大学生程序竞赛</Menu.Item>
      <Menu.Item key='3'>NOIP</Menu.Item>
      <Menu.Item key='3'>ACM</Menu.Item>
    </Menu>
  );
export default function FilterBar() {
  return (
    <>
    <div className='flex justify-between items-center bg-gray-50'>
    <div className='justify-between space-x-10'>
        <Dropdown droplist={dropList_problems} position='bl'>
            <Button type='text'>
                题单 <IconDown />
            </Button>
        </Dropdown>

        <Dropdown droplist={dropList_level} position='bl' >
            <Button type='text'>
                难度 <IconDown />
            </Button>
        </Dropdown>


        <Dropdown droplist={dropList_status} position='bl' >
            <Button type='text'>
                状态 <IconDown />
            </Button>
        </Dropdown>

        <Dropdown droplist={dropList_tags} position='bl' >
            <Button type='text'>
                标签 <IconDown />
            </Button>
        </Dropdown>
    </div>
    <div className='flex space-x-4 items-center m-2'>
        <InputSearch
            
            placeholder='Please enter something'
            style={{ width: 350}}
            searchButton={true}
        />
        <Button shape='circle' type='primary' icon={<IconRefresh />} />
    </div>
    </div>
    </>
    
  )
}
