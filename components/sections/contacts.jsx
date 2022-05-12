import {
  Alert,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Switch,
  Timeline,
  Typography,
  message,
} from "antd";
import React, { memo, useCallback, useRef, useState } from "react";
import Words from "../../resources/words";
import LottieFile from "../common/lottie";
import ContactLottie from "../../assets/lotties/contact-logo.json";
import { useForm } from "react-hook-form";
import InputFormItem from "../hook-form/input-item";
import phoneLottie from "../../assets/lotties/phone-logo.json";
import emailLottie from "../../assets/lotties/email-logo.json";
import locationLottie from "../../assets/lotties/location-logo.json";
import ContactsSpace from "../common/contacts-space";
import SocialMedias from "../common/social-medias";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall, FiAtSign } from "react-icons/fi";
import Joi from "joi";
import DateItem from "../hook-form/date-item";
import DropDownItem from "../hook-form/dropdown-item";
import SelectItems from "../hook-form/select-item";
import moment from "moment";
import { usePageContext } from "../contexts/page-context";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import contactCoding from "../../assets/images/contact-coding4.jpg";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const ScrollOverPack = ScrollAnim.OverPack;

const { Text, Title } = Typography;

const schema = Joi.object({
  FullName: Joi.string().min(5).required(),
  Email: Joi.string()
    .email({
      tlds: { allow: false },
    })
    .required(),
  PhoneNumber: Joi.string().max(15),
  Details: Joi.string().min(10).max(5000).required(),
});
const orderSchema = Joi.object({
  FullName: Joi.string().min(5).required(),
  Email: Joi.string()
    .email({
      tlds: { allow: false },
    })
    .required(),
  PhoneNumber: Joi.string().max(15),
  ProjectName: Joi.string().min(1).required(),
  ProjectType: Joi.number().min(1).required(),
  Skills: Joi.array().min(1),
  Cost: Joi.string().min(2),
  StartDate: Joi.any().required(),
  FinishDate: Joi.any(),
  Details: Joi.string().min(1).max(5000),
});

const useJoiValidationResolver = (validationSchema) => {
  return useCallback(
    async (data) => {
      const { error, value: values } = await validationSchema.validate(data, {
        abortEarly: false,
      });
      if (!error) return { values: values, errors: {} };
      return {
        values: {},
        errors: error.details.reduce(
          (previous, currentError) => ({
            ...previous,
            [currentError.path[0]]: currentError,
          }),
          {}
        ),
      };
    },
    [validationSchema]
  );
};

const Contacts = () => {
  const [isOrder, setIsOrder] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
    resolver: useJoiValidationResolver(isOrder ? orderSchema : schema),
  });

  const onSubmit = async (data) => {
    if (isOrder) {
      data.StartDate = moment(data.StartDate).toDate();
      data.FinishDate = moment(data.FinishDate).toDate();
    }
    await sendEmail(data);
  };

  const dataSource = [
    { TypeID: 1, TypeTitle: "Company" },
    { TypeID: 2, TypeTitle: "Organization" },
    { TypeID: 3, TypeTitle: "Personal" },
  ];
  const selectOptions = [
    "React JS",
    "React Native",
    "Node JS",
    "Next JS",
    "SQL",
  ];
  const handleChangeOrder = (status) => {
    setIsOrder(status);
  };

  const { darkMode } = usePageContext();

  const sendEmail = (data) => {
    try {
      emailjs
        .send("service_3rjj41n", "template_htxdieb", data, "bgvTdpk5DA3CFCFXE")
        .then((result) => {
          if (result.text === "OK") {
            message.success(
              <Text className="ParagraphOne" style={{ fontSize: 20 }}>
                Your message has been successfully sent
              </Text>
            );
          }
        });
    } catch (error) {
      message.error(
        <Text className="ParagraphOne" style={{ fontSize: 20 }}>
          There was a problem sending the message. Please try again.
        </Text>
      );
    } finally {
      reset();
    }
  };

  return (
    <Row
      style={{
        padding: 60,
      }}
    >
      <Col
        md={24}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title style={{ color: darkMode ? "white" : "#141414" }}>
          <Slide left cascade duration={1000}>
            {Words.contact_title}
          </Slide>
        </Title>
        <Switch
          onChange={handleChangeOrder}
          style={{ minHeight: 50, minWidth: 220 }}
          unCheckedChildren={
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
              className="ParagraphThree"
            >
              Private Message
            </Text>
          }
          checkedChildren={
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
              className="ParagraphThree"
            >
              Project Order
            </Text>
          }
        />
      </Col>
      <Col md={24} style={{ zIndex: 3 }}>
        <Row align="middle" style={{ width: "100%", marginTop: 40 }}>
          <Col md={8}>
            <Zoom top delay={500}>
              <LottieFile
                animationData={ContactLottie}
                width={500}
                height={500}
              />
            </Zoom>
          </Col>
          {isOrder ? (
            <Col md={16}>
              <Row style={{ marginTop: 20 }}>
                <Col md={24}>
                  <Row gutter={[0, 25]} justify="center" align="middle">
                    <Col md={21}>
                      <Alert
                        description={
                          <Text
                            style={{ fontSize: 20 }}
                            className="ParagraphThree"
                          >
                            {Words.fill_form}
                          </Text>
                        }
                        showIcon
                      />
                    </Col>
                    <Col md={24}>
                      <Form
                        onFinish={handleSubmit(onSubmit)}
                        style={{ width: "100%" }}
                      >
                        <Row
                          style={{ width: "100%" }}
                          align="middle"
                          gutter={[40, 20]}
                          justify="center"
                        >
                          <Col>
                            <Space
                              direction="vertical"
                              size={"large"}
                              style={{ width: "100%" }}
                            >
                              <InputFormItem
                                name="FullName"
                                control={control}
                                placeholder="FullName"
                              />
                              <InputFormItem
                                name="Email"
                                control={control}
                                placeholder="Email"
                              />
                              <InputFormItem
                                name="PhoneNumber"
                                control={control}
                                placeholder="PhoneNumber"
                              />
                            </Space>
                          </Col>
                          <Col>
                            <Space
                              direction="vertical"
                              size={"large"}
                              style={{ width: "100%" }}
                            >
                              <InputFormItem
                                name="ProjectName"
                                control={control}
                                placeholder="ProjectName"
                              />
                              <DropDownItem
                                name="ProjectType"
                                placeholder={"ProjectType"}
                                control={control}
                                dataSource={dataSource}
                                keyColumn="TypeID"
                                valueColumn="TypeTitle"
                              />
                              <SelectItems
                                name="Skills"
                                placeholder={"Skills Required"}
                                control={control}
                                dataSource={selectOptions}
                              />
                            </Space>
                          </Col>
                          <Col>
                            <Space
                              direction="vertical"
                              size={"large"}
                              style={{ width: "100%" }}
                            >
                              <InputFormItem
                                name="Cost"
                                control={control}
                                placeholder="Estimated Cost ($)"
                              />
                              <DateItem
                                name={"StartDate"}
                                control={control}
                                placeholder={"StartDate"}
                                setValue={setValue}
                              />
                              <DateItem
                                name={"FinishDate"}
                                control={control}
                                placeholder={"FinishDate"}
                                setValue={setValue}
                              />
                            </Space>
                          </Col>
                          <Col md={19}>
                            <InputFormItem
                              name="Details"
                              control={control}
                              type="textArea"
                              placeholder="Details"
                            />
                          </Col>
                          <Col
                            md={24}
                            className="center"
                            style={{ textAlign: "center" }}
                          >
                            <Space size={"large"}>
                              <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                style={{
                                  minHeight: 50,
                                  backgroundColor: "#00C897",
                                  borderColor: "#00C897",
                                }}
                              >
                                <Text
                                  className="ParagraphThree"
                                  style={{
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                >
                                  {Words.submit}
                                </Text>
                              </Button>
                              <Button
                                style={{
                                  minHeight: 50,
                                  backgroundColor: "#E15FED",
                                  borderColor: "#E15FED",
                                }}
                                type="primary"
                                size="large"
                                onClick={() => reset()}
                              >
                                <Text
                                  className="ParagraphThree"
                                  style={{
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                >
                                  {Words.clear}
                                </Text>
                              </Button>
                            </Space>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          ) : (
            <Col md={16}>
              <Row style={{ width: "100%" }} align="middle">
                <Col md={15} className="center">
                  <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                    size="middle"
                  >
                    <Title
                      level={3}
                      style={{ color: darkMode ? "white" : "#141414" }}
                      className="ParagraphThree"
                    >
                      <Roll top cascade delay={500}>
                        {Words.get_in_touch}
                      </Roll>
                    </Title>
                    <Form
                      onFinish={handleSubmit(onSubmit)}
                      style={{ width: "100%" }}
                    >
                      <Row
                        style={{ width: "100%" }}
                        align="middle"
                        gutter={[0, 20]}
                      >
                        <Col md={9}>
                          <Fade left cascade>
                            <Space
                              direction="vertical"
                              size={"large"}
                              style={{ width: "100%" }}
                            >
                              <InputFormItem
                                name="FullName"
                                control={control}
                                placeholder="FullName"
                              />
                              <InputFormItem
                                name="Email"
                                control={control}
                                placeholder="Email"
                              />
                              <InputFormItem
                                name="PhoneNumber"
                                control={control}
                                placeholder="PhoneNumber"
                              />
                            </Space>
                          </Fade>
                        </Col>
                        <Col md={14} style={{ marginLeft: 20 }}>
                          <Fade left delay={600}>
                            <InputFormItem
                              name="Details"
                              control={control}
                              type="textArea"
                              placeholder="Details"
                            />
                          </Fade>
                        </Col>
                        <Col
                          md={24}
                          className="center"
                          style={{ textAlign: "center" }}
                        >
                          <Fade left cascade delay={800}>
                            <Space size={"large"}>
                              <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                style={{
                                  minHeight: 50,
                                  backgroundColor: "#00C897",
                                  borderColor: "#00C897",
                                }}
                              >
                                <Text
                                  className="ParagraphThree"
                                  style={{
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                >
                                  {Words.submit}
                                </Text>
                              </Button>
                              <Button
                                style={{
                                  minHeight: 50,
                                  backgroundColor: "#E15FED",
                                  borderColor: "#E15FED",
                                }}
                                type="primary"
                                size="large"
                                onClick={() => reset()}
                              >
                                <Text
                                  className="ParagraphThree"
                                  style={{
                                    fontSize: 20,
                                    color: "white",
                                  }}
                                >
                                  {Words.clear}
                                </Text>
                              </Button>
                            </Space>
                          </Fade>
                        </Col>
                      </Row>
                    </Form>
                  </Space>
                </Col>
                <Col
                  md={9}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Bounce top delay={1000}>
                    <Space
                      direction="vertical"
                      style={{ width: "65%" }}
                      size={"middle"}
                    >
                      <Title
                        level={3}
                        className="ParagraphThree"
                        style={{ color: darkMode ? "white" : "#141414" }}
                      >
                        More Info ...
                      </Title>
                      {/* <Text
                      style={{ color: darkMode ? "white" : "#141414", fontSize: 15 }}
                      className="ParagraphThree"
                    >
                      {Words.greeting_text}
                    </Text> */}
                      <ContactsSpace
                        Icon={HiOutlineLocationMarker}
                        text={"Tehran Mazanadaran Golestan , Iran"}
                        color={"#1CC25E"}
                      />
                      <ContactsSpace
                        Icon={FiPhoneCall}
                        text={"+989333730037"}
                        color={"#B40F0F"}
                      />
                      <ContactsSpace
                        Icon={FiAtSign}
                        text={"montazerion@gmail.com"}
                        color={"#025DF4"}
                      />
                      <SocialMedias />
                    </Space>
                  </Bounce>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default Contacts;
