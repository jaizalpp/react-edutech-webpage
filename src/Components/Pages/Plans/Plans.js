import React from "react";
import "./Plans.css";

function Plans() {

  const handleClick = () => {
    window.open("https://chat.whatsapp.com")
  }

  const pricingData = [
    {
      title: "Regular Member",
      price: "$0",
      duration: "/month",
      color: "#fff",

      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standerd Options",
        "5 classes per Week",
      ],
    },

    {
      title: "Premium Member",
      price: "$100",
      duration: "/month",
      color: "#6f55f2",

      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standerd Options",
        "5 classes per Week",
      ],
    },

    {
      title: "Standerd Member",
      price: "$10",
      duration: "/month",
      color: "#fff",

      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standerd Options",
        "5 classes per Week",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="pricing-top">
        <h2 className="section_title">Premium Pricing Plan</h2>
        <p>
          Unlock elite tech services with our premium pricing plan and soar
          ahead of the completition
        </p>
      </div>

      <div className="pricing_wrapper">
        {pricingData.map((pricingItem, index) => (
          <div className="pricing_item" key={index}>
            <div className="pricing_card-top" style={{ background: pricingItem.color }}>
              <h2 className="section_title">{pricingItem.title}</h2>
              <h2 className="pricing_section_title">{pricingItem.price} <span>{pricingItem.duration}</span></h2>
            </div>

            <div className="services">
              <ul>
                {pricingItem.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
                
              </ul>
              <button className="register-btn" onClick={handleClick}>Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
