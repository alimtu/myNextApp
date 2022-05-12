import React, { memo } from "react";
import { Typography, Col, Select, Tag, Row } from "antd";
import { Controller, useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import utils from "../../tools/utils";
import Words from "../../resources/words";

const { Option } = Select;

const { Text } = Typography;

const SelectItems = ({
  control,
  name,
  placeholder,
  dataSource,
  keyColumn,
  valueColumn,
  ...rest
}) => {
  const {
    field: { onChange },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  const onChangeSelect = (value) => {
    onChange(value);
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
            <Select
              key={1020}
              {...field}
              bordered={false}
              onChange={onChangeSelect}
              placeholder={
                <Col>
                  <Text
                    className="ParagraphThree"
                    style={{
                      color: "rgba(15, 10, 11, 0.456)",
                      fontSize: 16,
                      width: "100%",
                    }}
                  >
                    {placeholder ? "SR" : Words.select_please}
                  </Text>
                </Col>
              }
              mode="tags"
              showArrow
              style={{
                minHeight: 45,
                minWidth: 275,
                display: "flex",
                alignItems: "center0",
                backgroundColor: "#D3EEF9",
              }}
            >
              {dataSource &&
                dataSource.map((item, inx) => (
                  <Option
                    key={`${inx + 1}- ${item}`}
                    value={item}
                    className="ParagraphThree"
                  >
                    {item[valueColumn]}
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

export default SelectItems;
