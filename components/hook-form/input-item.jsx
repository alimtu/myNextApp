import React from "react";
import { Input, Typography, Col, Row } from "antd";
import { Controller, useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import utils from "../../tools/utils";
import Words from "../../resources/words";

const { Text } = Typography;
const { TextArea } = Input;

const InputFormItem = ({ control, name, type, placeholder, ...rest }) => {
  const {
    formState: { errors },
  } = useController({
    name,
    control,
  });

  return (
    <Row
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      gutter={[0, 5]}
    >
      <Col>
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            type === "textArea" ? (
              <TextArea
                name={name}
                {...field}
                placeholder={placeholder}
                size="large"
                allowClear
                rows={7}
                className="contactInput"
                style={{
                  minHeight: 45,
                  minWidth: 275,
                  backgroundColor: "#D3EEF9",
                }}
              />
            ) : (
              <Input
                name={name}
                {...field}
                placeholder={placeholder}
                size="large"
                allowClear
                style={{
                  minHeight: 45,
                  minWidth: 275,
                  backgroundColor: "#D3EEF9",
                }}
                className="contactInput"
                bordered={false}
              />
            )
          }
        />
      </Col>
      <Col style={{ textAlign: "start" }}>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Text className="ParagraphThree" style={{ color: "red" }}>
              {message}
            </Text>
          )}
        />
      </Col>
    </Row>
  );
};

export default InputFormItem;
