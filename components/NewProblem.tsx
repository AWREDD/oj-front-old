import React from 'react';

import { useRef, useState } from 'react';
import { Form, Input, Button, Grid, Modal, Space, Radio,InputTag,InputNumber} from '@arco-design/web-react';
import { IconArrowRise, IconArrowFall, IconDelete } from '@arco-design/web-react/icon';
import { DatePicker } from '@arco-design/web-react';
const TextArea = Input.TextArea;
const FormItem = Form.Item
const RadioGroup = Radio.Group;
export default function NewProblem() {
    const [visible, setVisible] = React.useState(false);
    const [level, setLevel] = React.useState('simple');
    const [form] = Form.useForm();
    const formRef = useRef();
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  return (
    <div>
        <Button onClick={() => setVisible(true)} type='primary'>
            Open Modal
        </Button>
        <Modal
            title='Modal Title'
            visible={visible}
            onOk={() =>{
                formRef.current.submit()
                formRef.current.resetFields()
                setVisible(false)
            } }
            onCancel={() =>{
                formRef.current.resetFields()
                setVisible(false)
                
            } }
            autoFocus={false}
            focusLock={true}
        >
            <Form
        ref={formRef}
        
        autoComplete='off'
        
        onValuesChange={(_, v) => {
          console.log(_, v);
        }}
        
        onSubmit={(values) => {
            console.log(values);
            fetch('http://127.0.0.1:5000/problem/create', {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        title: values.title,
                        contributor: values.contributor,
                        content: values.content,
                        start_time: values.duration.begin,
                        time_limit: values.timeLimit,
                        
                    }

                ),
      })
         .then((res) => res.json())
         .then((post) => {
            setPosts((posts) => [post, ...posts]);
            setTitle('');
            setBody('');
         })
         .catch((err) => {
            console.log(err.message);
         });

        }}
      >
        <FormItem
        label='题目名称'
        field='title'
        rules={[{  message: 'Please enter number' }]}
        
      >
        <Input placeholder='请输入题目名称' />
      </FormItem>
      <FormItem
        label='Contributor'
        field='contributor'
        
      >
        <Input placeholder='请输入' />
      </FormItem>
      <FormItem
        label='题目内容'
        field='content'
       >
        <TextArea placeholder='请输入题目内容' />
      </FormItem>
      <FormItem label='题目难度' field='level'>
        <RadioGroup onChange={setLevel} type='button' name='level' value={level}>
          <Radio value='simple'>简单</Radio>
          <Radio value='normal'>普通</Radio>
          <Radio value='hard'>困难</Radio>
        </RadioGroup>
      </FormItem>
    <FormItem label='时间限制' field='timeLimit'>
    <InputNumber
          mode='button'
          defaultValue={2}
          max={20}
          style={{ width: 160, margin: '10px 24px 10px 0' }}
        />
    </FormItem>
      <FormItem label='标签' field='tags'>
      <InputTag
        allowClear
        
        placeholder='请输入标签'
        style={{ maxWidth: 350, marginRight: 20 }}
      />
      </FormItem>
        <Form.List field='samples'>
          {(fields, { add, remove, move }) => {
            return (
              <div>
                {fields.map((item, index) => {
                  return (
                    <div key={item.key}>
                      <Form.Item label={'样例 ' + index}>
                        <Space>
                          <Form.Item
                            field={item.field + '.input'}
                            >
                            <Input placeholder='请输入输入'/>
                          </Form.Item>
                          <Form.Item
                            field={item.field + '.output'}
                          >
                            <Input placeholder='请输入输出'/>
                          </Form.Item>
                          <Button
                            icon={<IconDelete />}
                            shape='circle'
                            status='danger'
                            onClick={() => remove(index)}
                          ></Button>
                        </Space>
                      </Form.Item>
                    </div>
                  );
                })}
                <Form.Item wrapperCol={{ offset: 5 }}>
                  <Button
                    onClick={() => {
                      add();
                    }}
                  >
                    添加样例
                  </Button>
                </Form.Item>
                <FormItem
                label='题目期限'
                
                field='duration'
                
                
                normalize={(value) => {
                return {
                    begin: value && value[0],
                    end: value && value[1],
                    };
                }}
                formatter={(value) => {
                    return value && value.begin ? [value.begin, value.end] : [];
                }}
                    >
                    <DatePicker.RangePicker 
                    showTime={{
                        defaultValue: ['00:00', '04:05'],
                        format: 'HH:mm',
                      }}
                    format='YYYY-MM-DD HH:mm:ss' />
                </FormItem>
              </div>
            );
          }}
        </Form.List>
      </Form>
        </Modal>
    </div>
  );
}


