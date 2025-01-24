import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Projects.css"
import { Box, Typography, Button } from "@mui/material";

// Project Data
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A visually stunning personal portfolio built for showcasing skills.",
    image: "/path/to/image1.jpg",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "A sleek, interactive dashboard for real-time analytics.",
    image: "/path/to/image2.jpg",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce application with an intuitive UI.",
    image: "/path/to/image3.jpg",
    link: "#",
  },
  {
    title: "Mobile UI Design",
    description: "A responsive mobile app UI with unique animations.",
    image: "/path/to/image4.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <Box
  id="projects"
  sx={{
    padding: "50px 0",
    background: "linear-gradient(135deg, #1f4037, #99f2c8)", // Gradient background
    color: "#fff", // Ensures text is readable on gradient
  }}
>
  {/* Section Title */}
  <Typography
    variant="h3"
    gutterBottom
    sx={{
      fontWeight: "bold",
      marginBottom: "40px",
      textAlign: "center",
      textTransform: "uppercase",
      color: "#fff", // Matches the theme
    }}
  >
    My <span style={{ color: "#FF6F61" }}>Projects</span>
  </Typography>

  {/* Swiper Slider */}
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    centeredSlides={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    style={{ width: "100%", height: "67vh" }}
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <Box
          className="project-card"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff", // Text color matches theme
          }}
        >
          {/* Project Image */}
         {/*  <Box
            className="project-image"
            sx={{
              height: "60%",
              width: "100%",
              maxWidth: "800px",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Add shadow to images
            }}
          ></Box> */}

          {/* Project Content */}
          <Box
            className="project-content"
            sx={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                marginBottom: "15px",
                color: "#e0e0e0", // Light gray for description
              }}
            >
              {project.description}
            </Typography>
            <Button
              className="project-button"
              variant="contained"
              href={project.link}
              sx={{
                backgroundColor: "#FF6F61",
                color: "#fff",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "30px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#e8584f",
                },
              }}
            >
              View Project
            </Button>
          </Box>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
</Box>

  );
};

export default Projects;
