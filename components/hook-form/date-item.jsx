import React from "react";
import { ConfigProvider, Col, Typography, Row, DatePicker } from "antd";
import utils from "./../../tools/utils";
import { Controller, useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "antd/dist/antd.css";

const { Text } = Typography;

const DateItem = ({ name, control, placeholder, setValue }) => {
  const {
    field: { value, onChange },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  const onChangeDate = (value, dateString) => {
    onChange(dateString);
  };

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
          render={({ field }) => (
            <DatePicker
              {...field}
              // onChange={onChangeDate}
              placeholder={placeholder}
              // value={value && value.length > 0 ? value : null}
              style={{
                minHeight: 45,
                minWidth: 275,
                backgroundColor: "#D3EEF9",
              }}
              className="contactInput"
            />
          )}
        />
      </Col>
      <Col style={{ textAlign: "start" }}>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Text style={{ color: "red" }}>{message}</Text>
          )}
        />
      </Col>
    </Row>
  );
};

export default DateItem;
