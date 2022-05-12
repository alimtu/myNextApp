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
import React, { memo, useCallback, useState } from "react";
import Words from "../../resources/words";
import LottieFile from "../common/lottie";
import ContactLottie from "../../assets/lotties/contact-logo.json";
import { useForm } from "react-hook-form";
import InputFormItem from "../hook-form/input-item";
import SocialMedias from "../common/social-medias";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall, FiAtSign } from "react-icons/fi";
import Joi from "joi";
import moment from "moment";
import { usePageContext } from "../contexts/page-context";
import ScrollAnim, { Parallax } from "rc-scroll-anim";
import ContactsSpaceMobile from "./inner-component/contacts-space-mobile";
import QueueAnim from "rc-queue-anim";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Slide } from "react-reveal";
import emailjs from "@emailjs/browser";

const ScrollParallax = ScrollAnim.Parallax;
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

const ContactsMobile = () => {
  const [isOrder, setIsOrder] = useState(false);
  const { control, handleSubmit, reset } = useForm({
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

  const { darkMode } = usePageContext();

  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col xs={24} className="center">
        <Row gutter={[0, 20]}>
          <Col xs={24} className="center">
            <Title style={{ color: darkMode ? "white" : "#141414", margin: 0 }}>
              <Slide left duration={1000} cascade>
                Contacts
              </Slide>
            </Title>
          </Col>
          <Col xs={24}>
            <Fade bottom duration={1000}>
              <Col
                xs={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LottieFile
                  animationData={ContactLottie}
                  width={350}
                  height={350}
                />
              </Col>
            </Fade>
          </Col>
        </Row>
      </Col>
      <Col xs={24} className="center" style={{ minHeight: "20vh" }}>
        <Space direction="vertical" className="center">
          <Title
            level={2}
            className="ParagraphFour"
            style={{ color: darkMode ? "white" : "#141414" }}
          >
            More Info ...
          </Title>

          <Col xs={24} className="center" style={{ paddingRight: 15 }}>
            <Timeline mode={"alternate"}>
              <Timeline.Item
                label={
                  <Bounce top duration={1000} delay={500}>
                    <HiOutlineLocationMarker
                      style={{ fontSize: 30, color: "#1CC25E" }}
                    />
                  </Bounce>
                }
              >
                <Bounce top duration={1000}>
                  <ContactsSpaceMobile
                    text={"Tehran Mazanadaran Golestan , Iran"}
                  />
                </Bounce>
              </Timeline.Item>
              <Timeline.Item
                style={{
                  display: "flex",
                  paddingLeft: 25,
                }}
                label={
                  <Bounce top duration={1000} delay={600}>
                    <FiAtSign style={{ fontSize: 30, color: "#025DF4" }} />
                  </Bounce>
                }
              >
                <Bounce top duration={1000} delay={200}>
                  <ContactsSpaceMobile
                    text={"montazerion@gmail.com"}
                    color={"#025DF4"}
                  />
                </Bounce>
              </Timeline.Item>
              <Timeline.Item
                label={
                  <Bounce bottom duration={1000} delay={800}>
                    <FiPhoneCall style={{ fontSize: 30, color: "#B40F0F" }} />
                  </Bounce>
                }
              >
                <Bounce bottom duration={1000} delay={100}>
                  <ContactsSpaceMobile text={"+989333730037"} mobile />
                </Bounce>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Space>
      </Col>
      <Col xs={24} className="center">
        <Fade bottom>
          <div className="center">
            <Space
              direction="vertical"
              style={{ width: "100%" }}
              align="center"
            >
              <Title
                level={3}
                style={{ color: darkMode ? "white" : "#141414" }}
                className="ParagraphThree"
              >
                {Words.get_in_touch}
              </Title>
              <Form onFinish={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                <Row
                  style={{ width: "100%" }}
                  align="middle"
                  gutter={[0, 20]}
                  justify="center"
                >
                  <QueueAnim
                    key="1"
                    className="queue-simple"
                    style={{ height: 480 }}
                  >
                    <Col xs={24} key="0" className="center">
                      <Space
                        direction="vertical"
                        size={"large"}
                        style={{ width: "100%" }}
                        align="center"
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
                        <InputFormItem
                          name="Details"
                          control={control}
                          type="textArea"
                          placeholder="Details"
                        />
                      </Space>
                    </Col>
                    <Col
                      xs={24}
                      key="2"
                      className="center"
                      style={{ marginTop: 15 }}
                    >
                      <Space size={"large"}>
                        <Button
                          type="primary"
                          size="large"
                          htmlType="submit"
                          className="center"
                          style={{
                            minHeight: 50,
                            backgroundColor: "#00C897",
                            borderColor: "#00C897",
                          }}
                        >
                          <Text
                            className="ParagraphSeven"
                            style={{
                              fontSize: 20,
                              color: "#fff1f0",
                              fontWeight: 800,
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
                          className="center"
                          onClick={() => reset()}
                        >
                          <Text
                            className="ParagraphSeven"
                            style={{
                              fontSize: 20,
                              color: "#fff1f0",
                              fontWeight: 800,
                            }}
                          >
                            {Words.clear}
                          </Text>
                        </Button>
                      </Space>
                    </Col>
                  </QueueAnim>
                </Row>
              </Form>
            </Space>
          </div>
        </Fade>
      </Col>
      <Col
        xs={24}
        className="center"
        style={{ marginTop: 60, marginBottom: 60 }}
      >
        <SocialMedias />
      </Col>
    </Row>
  );
};

export default memo(ContactsMobile);
