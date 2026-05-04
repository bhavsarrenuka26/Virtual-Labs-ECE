import React, { useRef, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Assignment List
  const assignments = [
    {
      id: 1,
      title: "SQL DDL & Objects",
      desc: "Design and develop SQL DDL statements using Table, View, Index, Sequence, and Synonym.",
    },
    {
      id: 2,
      title: "SQL DML Operations",
      desc: "Perform Insert, Select, Update, and Delete queries with operators and functions.",
    },
    {
      id: 3,
      title: "Joins & Sub-queries",
      desc: "Design complex queries using all types of Joins and Sub-queries for a suitable application.",
    },
    {
      id: 4,
      title: "Stored Procedure",
      desc: "Write a PL/SQL Stored Procedure 'calculate_fine' to process library requirements.",
    },
    {
      id: 5,
      title: "PL/SQL Cursors",
      desc: "Use a parameterized Cursor to merge data from N_RollCall to O_RollCall tables.",
    },
    {
      id: 6,
      title: "Database Trigger",
      desc: "Implement a trigger on the Library table to audit updates/deletes into Library_Audit.",
    },
    {
      id: 7,
      title: "MongoDB CRUD",
      desc: "Design NoSQL queries using CRUD operations, SAVE method, and logical operators.",
    },
    {
      id: 8,
      title: "MongoDB Aggregation",
      desc: "Implement Aggregation and Indexing strategies in MongoDB with suitable examples.",
    },
    {
      id: 9,
      title: "MongoDB Map-Reduce",
      desc: "Implement Map-Reduce operations for efficient data processing in MongoDB.",
    },
  ];

  // Auto-Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 340;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
const location = useLocation();
  // Grab the secret ID we passed from the Subjects page
  const subjectId = location.state?.subjectId;
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* Header */}
      <div
        className="text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          padding: "60px 0 120px 0",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      >
        <div className="container">
          <h1
            className="display-5 fw-bold mb-2"
            style={{ letterSpacing: "1px" }}
          >
            Pune Institute of Computer Technology
          </h1>
          <h2 className="h5 fw-light text-light opacity-75">
            Department of Electronics and Computer Engineering
          </h2>
        </div>
      </div>

      <div className="container" style={{ marginTop: "-80px" }}>
        {/* --- WELCOME CARD --- */}
        <div
          className="card border-0 shadow-sm mb-5"
          style={{ borderRadius: "16px", backgroundColor: "#ffffff" }}
        >
          <div className="card-body py-4 px-5">
            <span
              className="text-uppercase fw-bold mb-1 d-block"
              style={{
                letterSpacing: "1px",
                color: "#3b82f6",
                fontSize: "0.85rem",
              }}
            >
              Hello Data Engineer,
            </span>
            <h3 className="fw-bold text-dark mb-3">
              Welcome to DBMS Virtual Lab
            </h3>

            <div style={{ textAlign: "justify" }}>
              <p
                className="text-secondary mb-2"
                style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
              >
                A Database Management System (DBMS) is the backbone of modern
                applications. It allows developers to efficiently store,
                retrieve, and manage data through structured queries and
                optimized database engines.
              </p>
              <p
                className="text-secondary mb-2"
                style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
              >
                DBMS ensures data integrity, security, and concurrency while
                organizing information using principles like normalization to
                reduce redundancy and improve performance.
              </p>
              <p
                className="text-secondary mb-0"
                style={{ fontSize: "1.05rem", lineHeight: "1.6" }}
              >
                With powerful features like query optimization, access control,
                and reliable backup systems, DBMS makes building scalable and
                secure applications easier for developers.
              </p>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="position-relative px-4">
          <div className="d-flex justify-content-between align-items-end mb-3 px-2">
            <h4 className="fw-bold text-dark m-0">Practical Assignments</h4>
          </div>

          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y shadow"
            onClick={() => scroll("left")}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              zIndex: 10,
              backgroundColor: "#1e293b",
            }}
          >
            <FaChevronLeft />
          </button>

          <div
            ref={sliderRef}
            className="d-flex gap-4 overflow-hidden py-4 px-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {assignments.map((task) => (
              <div
                key={task.id}
                onClick={() => navigate(`/assignment/${task.id}`)}
                style={{
                  minWidth: "320px",
                  maxWidth: "320px",
                  cursor: "pointer",
                }}
              >
                {/* --- ASSIGNMENT CARD --- */}
                <div
                  className="card h-100 border-0 shadow-sm assignment-card"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="card-body p-4 d-flex flex-column align-items-center justify-content-center text-center">
                    {/* THE NEW LAB BADGE WITH HOVER EFFECT */}
                    <div className="mb-3">
                      <h5
                        className="fw-bold m-0 lab-badge"
                        style={{ fontSize: "1.2rem", letterSpacing: "0.5px" }}
                      >
                        Lab {task.id}
                      </h5>
                    </div>

                    {/* Title */}
                    <h6
                      className="fw-bold text-dark mb-2"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {task.title}
                    </h6>

                    {/* Description */}
                    <p
                      className="text-secondary small mb-0"
                      style={{ lineHeight: "1.5" }}
                    >
                      {task.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y shadow"
            onClick={() => scroll("right")}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              zIndex: 10,
              backgroundColor: "#1e293b",
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* --- HOVER EFFECTS CSS --- */}
      <style>{`
        /* Card Hover */
        .assignment-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            border: 1px solid #e2e8f0;
        }

        /* Default state of the Lab Text */
        .lab-badge {
            color: #0d6efd; /* Blue text */
            background-color: transparent;
            border: 2px solid transparent; /* Keeps layout from jumping */
            padding: 6px 16px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        /* Hover state of the Lab Text (triggers when card is hovered) */
        .assignment-card:hover .lab-badge {
            background-color: #334155; /* Dark slate blue matching your image */
            color: #ffffff !important; /* White text */
            border-color: #334155;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for the box */
            transform: scale(1.05); /* Slight pop effect */
        }
      `}</style>
    </div>
  );
};

export default Home;
