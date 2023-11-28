import { Button, Checkbox, Form, Input, message } from "antd";
import bg from "../assets/bg.jpg";
import { useRequest } from "ahooks";
import axios from "axios";
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login = () => {
  const { data, run } = useRequest(
    (params) =>
      axios.post("http://10.5.153.1:1337/api/auth/local", {
        identifier: params.username,
        password: params.password,
      }),
    {
      manual: true,
      onSuccess: (data) => {
        localStorage.setItem("token", data.data.jwt);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        message.success("登陆成功");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      },
      onError: (error) => {
        console.log();
        try {
          message.error(error.response.data.error.message);
        } catch (e) {
          message.error(error.message);
        }
      },
    }
  );
  const onFinish = (values: any) => {
    console.log("Success:", values);
    run(values);
  };
  return (
    <div className={"flex"}>
      <div className="w-[608px]">
        <div
          className={
            "relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28  h-[100vh]"
          }
        >
          <div className={"text-2xl"}>AREXTEST</div>

          <p className={"mt-20 text-lg font-semibold text-gray-900"}>
            Sign in to your account
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Don’t have an account?{" "}
            <a
              className="font-medium text-blue-600 hover:underline"
              href="/register"
            >
              Sign up
            </a>{" "}
            for a free trial.
          </p>
          <Form
            name="basic"
            layout={"vertical"}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ maxWidth: 384 }}
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={"w-[100%]"}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="flex-1">
        <img src={bg} alt="" className={"object-cover w-full h-full"} />
      </div>
    </div>
  );
};

export default Login;
