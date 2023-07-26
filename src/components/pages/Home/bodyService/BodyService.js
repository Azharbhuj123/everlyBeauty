import React, { useContext, useEffect } from "react";
import styles from "@/styles/components/bodyService/bodyService.module.css";
import Image from "next/image";
import female from "/public/assets/images/colada-female.png";
import { ServiceReciptData, TotalReciptData } from "@/pages/api/utils";
import Progressbar from "./Progressbar";
import DiscountToggle from "./DiscountToggle";
import DiscountType from "./DiscountType";
import MySession from "../mySession/MySession";
import { bookingContext } from "@/store/bookingContext";
import { createAPIEndPoint } from "@/src/config/api";
import { endPoints } from "@/src/config/endpoints";
const BodyService = () => {
  const [booking, setBooking] = useContext(bookingContext);
  const getService = async () => {
    try {
      const Response = await createAPIEndPoint(endPoints.services).fetchAll();
      console.log(Response, "response for services");
    } catch (error) {}
  };

  useEffect(() => {
    getService();
  }, []);

  const services = [
    {
      id: 1,
      name: "Leg",
      price: "90",
      time: "12",
    },
    {
      id: 2,
      name: "Bikini",
      price: "70",
      time: 9,
    },
    {
      id: 3,
      name: "Arm",
      price: "70",
      time: "9",
    },
    {
      id: 4,
      name: "Back",
      price: "55",
      time: "7",
    },
    {
      id: 5,
      name: "Front",
      price: "55",
      time: "7",
    },
    {
      id: 6,
      name: "Under Arms",
      price: "45",
      time: "6",
    },
    {
      id: 7,
      name: "Chest",
      price: "40",
      time: "5",
    },
    {
      id: 8,
      name: "Face & Neck",
      price: "55",
      time: "7",
    },
    {
      id: 9,
      name: "Abdomen",
      price: "40",
      time: "5",
    },
  ];

  const handleCheckBox = (service) => {
    const existingService = booking.find((item) => item.id === service.id);
    console.log(existingService, "service");
    if (existingService) {
      // Remove the service from newArray
      let updatedServices = booking.filter((item) => item.id !== service.id);
      setBooking(updatedServices);
    } else {
      // Push the service into newArray
      setBooking([...booking, service]);
    }
  };

  return (
    <>
      <div className={styles.bodyServiceContainer}>
        <div className={styles.bodyServiceWrapper}>
          <div className={styles.bodyServiceContent}>
            <div className={styles.bodyServiceContentLeft}>
              <div className={styles.bodyServicecheckboxes}>
                {services.map((item, index) => {
                  return (
                    <label key={item.id} className={styles.bodyServicelabels}>
                      <input
                        type="checkbox"
                        // onClick={() => setBooking([...booking, item])}
                        onChange={() => {
                          handleCheckBox(item);
                        }}
                      />
                      {item.name}
                    </label>
                  );
                })}
              </div>
              <div className={styles.bodyServiceFemale}>
                <Image src={female} width={400} height={800} alt="" />
              </div>
            </div>
            <div className={styles.bodyServiceContentRight}>
              <div className={styles.bodyServiceContentRightHeading}>
                <h1>Click On Checkbox To Select Bodypart</h1>
                <MySession />
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "6em",
            }}
          >
            <div style={{ width: "75%" }}>
              <Progressbar />
              <DiscountToggle />
              <DiscountType />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyService;
