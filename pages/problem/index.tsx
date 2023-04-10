import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";

import axios from 'axios'

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

import { Select, Card, Link, Button } from "@arco-design/web-react";
import { Grid, Divider } from "@arco-design/web-react";
import { Tag, Space } from "@arco-design/web-react";
import { Table, TableColumnProps } from "@arco-design/web-react";

const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option;
const options = ["java", "c", "python"];

import { useState } from "react";
import { Tabs, Typography } from "@arco-design/web-react";

const { Title, Paragraph, Text } = Typography;

const TabPane = Tabs.TabPane;
const style = {
  textAlign: "center",
  marginTop: 20,
};

const CodeArea = () => {
  const [activeTab, setActiveTab] = useState("1");

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const tags = [
    { index: 0, content: "easy", color: "green" },
    { index: 1, content: "2021", color: "orange" },
    { index: 2, content: "noip", color: "red" },
  ];

  const description = {
    content:
      "给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。请你将两个数相加，并以相同形式返回一个表示和的链表。你可以假设除了数字 0 之外，这两个数都不会以 0 开头。",
    example: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "l3 = [7,0,8]",
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "l3 = [0]",
      },
    ],
    notice: [
      "每个链表中的节点数在范围 [1, 100] 内",
      "0 <= Node.val <= 9",
      "题目数据保证列表表示的数字不含前导零",
    ],
  };

  const record_col = [
    { title: "Time", dataIndex: "time", key: "time" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => (
        <Tag
          color={
            text === "Accepted"
              ? "green"
              : text === "Wrong Answer"
              ? "red"
              : "orange"
          }
        >
          {text}
        </Tag>
      ),
    },
    { title: "Memory", dataIndex: "memory", key: "memory" },
    { title: "Timecost", dataIndex: "timecost", key: "timecost" },
    { title: "Language", dataIndex: "language", key: "language" },
  ];

  const record = [
    {
      time: "2021-10-10 10:10:10",
      status: "Accepted",
      memory: "1000",
      timecost: "1000",
      language: "java",
    },
    {
      time: "2020-02-02 02:02:02",
      status: "Wrong Answer",
      memory: "500",
      timecost: "100",
      language: "java",
    },
    {
      time: "2020-03-02 02:02:02",
      status: "Timeout",
      memory: "500",
      timecost: "1020",
      language: "c",
    },
  ];

  const solution = {
    decription:
      "由于输入的两个链表都是逆序存储数字的位数的，因此两个链表中同一位置的数字可以直接相加。我们同时遍历两个链表，逐位计算它们的和，并与当前位置的进位值相加。具体而言，如果当前两个链表处相应位置的数字为 n1,n2n1,n2n1,n2，进位值为 carry\textit{carry}carry，则它们的和为 n1+n2+carryn1+n2+\textit{carry}n1+n2+carry；其中，答案链表处相应位置的数字为 (n1+n2+carry) mod 10(n1+n2+\textit{carry}) \bmod 10(n1+n2+carry)mod10，而新的进位值为 ⌊n1+n2+carry10⌋lfloor\frac{n1+n2+\textit{carry}}{10}\rfloor⌊ 10 n1+n2+carry⌋。如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 000 。此外，如果链表遍历结束后，有 carry>0\textit{carry} > 0carry>0，还需要在答案链表的后面附加一个节点，节点的值为 carry\textit{carry}carry。",
    code: "test",
  };

  const submitCode = async () => {
    return await axios({
      method: "post",
      url: "localhost:3306/oj/submit",
      data: {}
    });
  };

  const getProblem = async () => {
    return await axios({
      method: "get",
      url: "localhost:3306/ojproblem",
      data: {}
    });
  };

  const getSolution = async () => {

  };

  const getSubmitHistories = async () => {
    
  };

  return (
    <div>
      <div style={{ width: "90%" }}>
        <Divider orientation="left">Horizontal</Divider>
        <Row className="grid-gutter-demo" gutter={24}>
          <Col span={12}>
            <div>
              <Card title="Q1. 两数相加" style={{ height: 1000 }}>
                <Space wrap>
                  {tags.map((e) => (
                    <Tag key={e.index} color={e.color} bordered>
                      {e.content}
                    </Tag>
                  ))}
                </Space>
                <Tabs activeTab={activeTab} onChange={setActiveTab}>
                  <TabPane key="1" title="Description">
                    <Typography>
                      <Title heading={5}>description</Title>
                      <Paragraph>{description.content}</Paragraph>
                      <Title heading={5}>Example</Title>
                      <Paragraph type="secondary">
                        {description.example.map((e, i) => (
                          <div key={i}>
                            <div>
                              <Typography.Title heading={6}>
                                Input
                              </Typography.Title>
                              <Typography.Text key={i} code>
                                {e.input}
                              </Typography.Text>
                            </div>

                            <div>
                              <Typography.Title heading={6}>
                                Output
                              </Typography.Title>
                              <Typography.Text key={i} code>
                                {e.output}
                              </Typography.Text>
                            </div>
                          </div>
                        ))}
                      </Paragraph>
                      <Title heading={5}>Notice</Title>
                      <Paragraph>
                        {description.notice.map((e, i) => (
                          <li key={i}>{e}</li>
                        ))}
                      </Paragraph>
                    </Typography>
                  </TabPane>
                  <TabPane key="2" title="Solution">
                    <Typography>
                      <Title heading={5}>Solution</Title>
                      <Paragraph>{solution.decription}</Paragraph>
                      <Title heading={5}>Code</Title>
                      <Paragraph type="secondary">
                        <Typography.Text code>{solution.code}</Typography.Text>
                      </Paragraph>
                    </Typography>
                  </TabPane>
                  <TabPane key="3" title="Record">
                    <Table columns={record_col} data={record} />;
                  </TabPane>
                </Tabs>
              </Card>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Card
                title="Coding Area"
                extra={
                  <Space>
                    <Select
                      placeholder="选择语言"
                      style={{ width: 154 }}
                      onChange={(value) =>
                        console.log("select language: ", value)
                      }
                    >
                      {options.map((option, index) => (
                        <Option
                          key={option}
                          disabled={index === 3}
                          value={option}
                        >
                          {option}
                        </Option>
                      ))}
                    </Select>
                    <Button key={1} type="primary">
                      Submit
                    </Button>
                  </Space>
                }
                style={{ height: 1000 }}
              >
                <Editor
                  value={code}
                  onValueChange={(code) => setCode(code)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                  }}
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CodeArea;
