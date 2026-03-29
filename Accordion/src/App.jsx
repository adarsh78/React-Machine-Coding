import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const App = () => {
  const [selectedId, setSelectedId] = useState(null)

  const data = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We provide a wide range of services including digital marketing, web development, and brand consulting tailored to meet your business needs.",
    },
    {
      id: 2,
      question: "How can I contact customer support?",
      answer:
        "You can reach our support team via email at support@example.com or call us at our toll-free number during business hours.",
    },
    {
      id: 3,
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee if you are not satisfied with our service, provided the request meets our terms and conditions.",
    },
    {
      id: 4,
      question: "Do you offer customized plans?",
      answer:
        "Yes, we can create a personalized plan based on your specific requirements. Please contact us for a detailed consultation.",
    },
  ];

  const handleToggleId = (id) => {
    setSelectedId(selectedId === id ? null : id);
  }


  return (
    <>
      <div className="card">
        {data.map((da) => (
          <div key={da.id} className="content">

            <div className="ques">
            <div>{da.question}</div>
            {selectedId === da.id ? <FaMinus onClick={() => handleToggleId(da.id)} className="icon"/> : <FaPlus onClick={() => handleToggleId(da.id)} className="icon"/>}
            </div>

            {selectedId === da.id && <div className="ans">{da.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
