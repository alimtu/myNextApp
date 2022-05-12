import React, { memo } from "react";
import { Typography, Col, Select, Row } from "antd";
import { Controller, useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import utils from "../../tools/utils";
import Words from "../../resources/words";

const { Option } = Select;

const { Text } = Typography;

const DropDownItem = ({
  control,
  name,
  placeholder,
  dataSource,
  keyColumn,
  valueColumn,
  ...rest
}) => {
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
          render={({ field }) => (
            <Select
              key={1000}
              {...field}
              allowClear
              bordered={false}
              {...rest}
              placeholder={
                <Text
                  className="ParagraphThree"
                  style={{ color: "rgba(15, 10, 11, 0.456)", fontSize: 16 }}
                >
                  {placeholder ? placeholder : Words.select_please}
                </Text>
              }
              style={{
                minHeight: 45,
                minWidth: 275,
                backgroundColor: "#D3EEF9",
                display: "flex",
                alignItems: "center",
              }}
              className="contactInput"
            >
              {dataSource &&
                dataSource.map((item) => (
                  <Option
                    key={`${keyColumn}_${item[keyColumn]}`}
                    value={item[keyColumn]}
                  >
                    <Text className="ParagraphThree"> {item[valueColumn]}</Text>
                  </Option>
                ))}
            </Select>
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

export default DropDownItem;
