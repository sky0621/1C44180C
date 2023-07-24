"use client";

import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("login: ", values);
    await router.push("/todo");
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Usernameを入力してください" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Passwordを入力してください" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
