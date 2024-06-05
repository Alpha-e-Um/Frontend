import { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Completed,
  CompletedLabel,
  CardContainter,
} from "./styles";
import { ReactComponent as CheckCircleOff } from "../../../assets/myPage/CheckCircleOff.svg";
import { ReactComponent as CheckCircleOn } from "../../../assets/myPage/CheckCircleOn.svg";
import MySupportCard from "../../MyPageCard/MySupportCard/mySupportCard";
import { applicationAPI } from "../../../api/applicationAPI";
import { ReactComponent as Line } from "../../../assets/myPage/myInfoVector1.svg";

const MySupport = ({ innerRef }) => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [page, setPage] = useState(1);

  const [visible, setVisible] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const CompletedSetting = () => {
    setIsCompleted(!isCompleted);
  };

  const StartAnimation = () => {
    const timer1 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: true }));
    }, 0);
    const timer2 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step1`]: true }));
    }, 100);
    const timer3 = setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step2`]: true }));
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const EndAnimation = async () => {
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step2`]: false }));
    }, 0);
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step1`]: false }));
    }, 0);
    setTimeout(() => {
      setVisible((prev) => ({ ...prev, [`step0`]: false }));
    }, 200);
  };

  innerRef.current = {
    EndAnimation,
  };

  const fetchApplications = async (page, state) => {
    try {
      const response = await applicationAPI.getMyApplications(page, state);
      console.log(response.data.data);
      setApplications(response.data.data.content);
      setFilteredApplications(response.data.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    StartAnimation();
    fetchApplications(0, "all");
  }, [page]);

  useEffect(() => {
    if (isCompleted) {
      setFilteredApplications(applications.filter((app) => !app.isCompleted));
    } else {
      setFilteredApplications(applications);
    }
  }, [isCompleted, applications]);

  return (
    <Container $isVisible={visible.step0}>
      <Title $isVisible={visible.step1}>지원현황</Title>
      <Line
        style={{ marginTop: "22px", marginLeft: "auto", marginRight: "auto" }}
      />

      <div
        style={{
          marginTop: "25px",
          width: "98%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Completed onClick={CompletedSetting} $isVisible={visible.step2}>
          {isCompleted ? <CheckCircleOn /> : <CheckCircleOff />}
          <CompletedLabel>모집 완료 제외하기</CompletedLabel>
        </Completed>
      </div>

      <CardContainter>
        {filteredApplications.map((item) => (
          <MySupportCard key={item.id} data={item} />
        ))}
      </CardContainter>
    </Container>
  );
};

export default MySupport;
