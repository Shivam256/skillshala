import { Button } from "@mui/material";
import React from "react";
import CustomRating from "../../../components/rating/rating.component";
import { faker } from "@faker-js/faker";
import { BsChevronDown } from "react-icons/bs";
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from "@mui/material";

const Course = () => {
  return (
    <div>
      <div className="w-full h-fit lg:h-96 bg-blue-500 z-0 absolute top-16 overflow-visible">
        <div className=" max-w-7xl mx-auto mt-12 flex flex-wrap px-10 md:px-7 lg:px-3 space-x-0">
          <div className="w-full lg:w-2/5 bg-white shadow-custom rounded-md h-fit p-2 flex flex-col space-y-3">
            <img
              src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
              alt=""
            />
            <div className="px-2 flex flex-col space-y-2">
              <h1 className="text-4xl font-bold text-blue-500">
                &#8377; 500/-
              </h1>
              <div className="my-10">
                <p className="text-lg ">55 lectures</p>
                <p className="text-lg ">40 hours content</p>
                <p className="text-lg ">Life time access</p>
                <p className="text-lg ">12 study groups</p>
              </div>
              <div className="flex w-full items-center space-x-2">
                <Button className="w-2/4 bg-blue-500 text-white hover:bg-blue-500 text-bold">
                  BUY NOW
                </Button>
                <Button className="w-2/4 bg-[#FF9800] text-white hover:bg-[#FF9800] text-bold">
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 pl-10 flex flex-col justify-between">
            <h1 className="text-4xl xl:text-5xl font-bold text-white">
              Complete React Native Developer Course 2022
            </h1>
            <h3 className="text-lg lg:text-xl text-white mt-5">
              Updated! Become a Senior React Developer. Build a massive
              E-commerce app with Redux, Hooks, GraphQL, Stripe, Firebase
            </h3>
            <h3 className="text-xl text-white mt-2">by Jack Sparrow</h3>
            <CustomRating initialRating={4} readOnly />
            <div className="text-white py-2 px-5 font-bold w-fit border border-white rounded-md mt-2">
              921 students
            </div>
            <div className="bg-white shadow-custom w-full h-44 p-2 mt-3 rounded-lg">
              <h2>Course outcomes</h2>
              <ul className="h-full flex flex-col flex-wrap list-disc px-5 font-light marker:text-blue-500">
                {[...Array(9)].map((i) => (
                  <li className="text-xl">item</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full h-fit mx-auto px-10 md:px-7 lg:px-3 mt-5 py-5">
          <div className="w-full h-fit bg-white shadow-custom p-4">
            <h1 className="text-2xl font-medium ">Requirements</h1>
            <p className="font-md text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              maxime? Reprehenderit, laborum recusandae ex, incidunt tempora
              sequi assumenda dolorem debitis facere at eos omnis inventore amet
              quos deleniti repellat nihil! Facilis et adipisci eveniet porro
              incidunt rem, perspiciatis optio quibusdam exercitationem error
              assumenda, fugiat, eligendi nesciunt officiis alias quaerat facere
              cumque. Assumenda, hic fugiat possimus perferendis optio molestiae
              deleniti eveniet.
            </p>
            <h1 className="text-2xl font-medium mt-4">Description</h1>
            <p className="font-md text-gray-700">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              maxime? Reprehenderit, laborum recusandae ex, incidunt tempora
              sequi assumenda dolorem debitis facere at eos omnis inventore amet
              quos deleniti repellat nihil! Facilis et adipisci eveniet porro
              incidunt rem, perspiciatis optio quibusdam exercitationem error
              assumenda, fugiat, eligendi nesciunt officiis alias quaerat facere
              cumque. Assumenda, hic fugiat possimus perferendis optio molestiae
              deleniti eveniet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque, maxime? Reprehenderit, laborum
              recusandae ex, incidunt tempora sequi assumenda dolorem debitis
              facere at eos omnis inventore amet quos deleniti repellat nihil!
              Facilis et adipisci eveniet porro incidunt rem, perspiciatis optio
              quibusdam exercitationem error assumenda, fugiat, eligendi
              nesciunt officiis alias quaerat facere cumque. Assumenda, hic
              fugiat possimus perferendis optio molestiae deleniti eveniet.
            </p>
          </div>
        </div>
        <div className="max-w-7xl w-full h-fit mx-auto px-10 md:px-7 lg:px-3 mt-2 py-5">
          <div className="w-full h-fit bg-white shadow-custom p-4 ">
            <h1 className="text-2xl font-medium mb-3">Course Contents</h1>
            {[...Array(8)].map((item, idx) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="flex justify-between"
                >
                  <Typography className="w-full">
                    {idx + 1}. Introduction to React
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, maxime? Reprehenderit, laborum recusandae ex,
                    incidunt tempora sequi assumenda dolorem debitis facere at
                    eos omnis inventore amet quos deleniti repellat nihil!
                    Facilis et adipisci eveniet porro incidunt rem
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
        <div className="max-w-7xl w-full h-fit mx-auto px-10 md:px-7 lg:px-3 mt-2 py-5">
          <div className="w-full h-fit bg-white shadow-custom py-4 px-5 flex ">
            <div className="flex flex-col items-center w-1/5">
              <img
                src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="w-48 h-48 rounded-full object-cover mb-3"
                loading="lazy"
              />
              <CustomRating readOnly initialRating={4} />
            </div>
            <div className="w-4/5 flex flex-col space-y-3">
              <h2 className="text-3xl">Emma Jones</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                veniam nostrum consectetur inventore. Officia alias dicta fuga
                delectus quas architecto numquam possimus. Nobis vitae magnam
                optio ratione officiis sapiente sunt. Quam deleniti beatae
                asperiores nemo libero. Illo veniam, deserunt beatae mollitia
                soluta recusandae quas molestiae corrupti tempore iste sapiente,
                eius rerum expedita modi quos atque! Impedit alias voluptatem
                suscipit cumque. Aliquam et, culpa corporis ipsa voluptas,
                nobis, est assumenda beatae placeat nulla adipisci! Ipsam maxime
                quia nulla ratione assumenda ab facere delectus fuga, voluptatum
                odio hic aliquam rem quae? Facilis.
              </div>
              <div>
                {" "}
                <h3 className="text-gray-600 ">13 courses</h3>
                <h3 className="text-gray-600 ">3021 students</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
