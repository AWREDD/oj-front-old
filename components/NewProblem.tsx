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
  return (
    <div>
        <Button onClick={() => setVisible(true)} type='primary'>
            Open Modal
        </Button>
        <Modal
            title='Modal Title'
            visible={visible}
            onOk={() => setVisible(false)}
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
        label='题目描述'
        field='description'
       >
        <TextArea placeholder='请输入题目描述' />
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


