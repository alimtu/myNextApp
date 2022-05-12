import { Space, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const { Text, Title } = Typography;

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Title>Page Not Found ...</Title>
      <Link href={"/"}>
        <Text className="ParagraphFive" style={{ fontSize: 25, color: "blue" }}>
          <u>HomePage</u>
        </Text>
      </Link>
    </Space>
  );
};

export default NotFoundPage;
