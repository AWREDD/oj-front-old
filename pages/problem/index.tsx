import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useRouter } from 'next/router'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

import axios from "axios";

import { json } from "stream/consumers";

import { Select, Card, Link, Button } from "@arco-design/web-react";
import { Grid, Divider } from "@arco-design/web-react";
import { Tag, Space } from "@arco-design/web-react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import { Tabs, Typography } from "@arco-design/web-react";

const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option;
const options = ["java", "c", "python"];

const { Title, Paragraph, Text } = Typography;
const TabPane = Tabs.TabPane;

const style = {
  textAlign: "center",
  marginTop: 20,
};

interface content_type {
  content: string;
  example: {
    input: string;
    output: string;
  }[];
  notice: string[];
  solution: {
    description: string;
    code: string;
  };
}

interface problem_type {
  id: number;
  title: string;
  contributor: string;
  start_time: string;
  time_limit: number;
  content: content_type;
  status: string;
  tag: {
    content: string;
    color: string;
  }[];
}

function timestampToTime(timestamp: number) {

  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

export default function CodeArea({ data }: { data: problem_type }) {

  const router = useRouter()
  const { pid } = router.query

  const [activeTab, setActiveTab] = useState("1");

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const [language, setLanguage] = React.useState("java");

  console.log("tags", data);

  const tags = JSON.parse(data.tag);

  console.log("data1111:", data.content);

  const content_data = JSON.parse(data.content);

  const description = {
    content: content_data.content,
    example: content_data.example,
    notice: content_data.notice,
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
    decription: content_data.solution.description,
    code: content_data.solution.code,
  };

  const submitCode = async () => {
    console.log({
      problem_id: data.id,
      user_id: 1,
      create_time: timestampToTime(new Date().getTime()),
      language: { language },
      code: { code },
    });
    return await axios.post("http://127.0.0.1:5000/submit", {
      problem_id: data.id,
      create_time: timestampToTime(new Date().getTime()),
      language: language,
      code: code,
    });
  };

  const getSubmitHistories = async () => {
    await axios.post("http://");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%" }}>
        <Divider orientation="left">Horizontal</Divider>
        <Row className="grid-gutter-demo" gutter={24}>
          <Col span={12}>
            <div>
              <Card title="Q1. 两数相加" style={{ height: 1000 }}>
                <Space wrap>
                  {tags.map((e, i) => (
                    <Tag key={i} color={e.color} bordered>
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
                      onChange={(value) => setLanguage(value)}
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
                    <Button key={1} type="primary" onClick={submitCode}>
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
}

export const getStaticProps = async () => {
  
  const res = await axios.get("http://127.0.0.1:5000/problem/detail?id=1");
  // const { data } = JSON.parse(res.data.data.content);
  const data = res.data.data.problem;
  return {
    props: {
      data,
    },
  };
};