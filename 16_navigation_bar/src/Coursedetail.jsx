// use param dybamic routingmai use kart hai ye id ke through detals display karta hai
// use location vahi url ka address bta deta hai jiska dekhna chaho  aur ye conditional rendering mai use hta hai
// use navigate --> jaise wesbite mai hota hai na go to hom  go back button vo issi se chalta hai 

import React from "react";
import { useParams, Link,useLocation } from "react-router-dom";

const Course_Detail = () => {
  // console.log(useParams())
  // console.log(useLocation())
  const arr = [
    {
      id: "MERN001",
      course_name: "MERN_Stack",
      price: 10000,
      duration: "5 months",
    },
    {
      id: "JAVA002",
      course_name: "Java_Full_stack",
      price: 15000,
      duration: "5 months",
    },
    {
      id: "PY0102",
      course_name: "Python_Full_Stack",
      price: 5000,
      duration: "5 months",
    },
    {
      id: "REACT99",
      course_name: "React.JS",
      price: 25000,
      duration: "5 months",
    },
  ];
  const { id } = useParams();
  const location = useLocation();

  const course_deatil = arr.filter((data) => data.id == id);
  // console.log(course_deatil);
  return (
    <>
      <div>
        <h1>Course Id = {id}</h1>
        <h2>Course Name = {course_deatil[0].course_name}</h2>
{/* iska matlab hai ki jiski location  ye hai usme ye duration and price nhi dikhana  */}
{/* location ka pathnam eagar python walaa nhi hai to usme hi duration and price dikhana hai agar  python walaa hai to usme ye nhi dikhana  */}
        {location.pathname != "/courses/PY0102" && (
          <>
            <h2>Course Dur. = {course_deatil[0].duration}</h2>
            <h2>Course Price = {course_deatil[0].price}</h2>
          </>
        )}
      </div>
      {/* button hame wapis back lejayega dynamic walaa page pe  */}
      <button>
        <Link
          to={"/courses"}
          style={{ textDecoration: "none", color: "black" }}
        >
          All Course
        </Link>
      </button>
    </>
  );
};

export default Course_Detail;