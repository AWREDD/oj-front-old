import React from 'react'
import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
import { IconDown } from '@arco-design/web-react/icon';
import { Input, Radio} from '@arco-design/web-react';
import { IconRefresh } from '@arco-design/web-react/icon';
const RadioGroup = Radio.Group;
const InputSearch = Input.Search;
const dropList_problems = (
    <Menu>
      <Menu.Item key='1'>Beijing</Menu.Item>
      <Menu.Item key='2'>Shanghai</Menu.Item>
      <Menu.Item key='3'>Guangzhou</Menu.Item>
    </Menu>
  );
const dropList_level = (
    <Menu>
      <Menu.Item key='1'>Beijing</Menu.Item>
      <Menu.Item key='2'>Shanghai</Menu.Item>
      <Menu.Item key='3'>Guangzhou</Menu.Item>
    </Menu>
);

const dropList_status = (
    <Menu>
      <Menu.Item key='1'>Beijing</Menu.Item>
      <Menu.Item key='2'>Shanghai</Menu.Item>
      <Menu.Item key='3'>Guangzhou</Menu.Item>
    </Menu>
);
const dropList_tags = (
    <Menu>
      <Menu.Item key='1'>Beijing</Menu.Item>
      <Menu.Item key='2'>Shanghai</Menu.Item>
      <Menu.Item key='3'>Guangzhou</Menu.Item>
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
