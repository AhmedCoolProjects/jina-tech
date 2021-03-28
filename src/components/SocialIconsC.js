import { Avatar, IconButton, Link } from "@material-ui/core";
import React from "react";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";

const icons = [
  {
    image: google,
    title: "gmail",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=jinacoolprojects@gmail.com",
  },
  {
    image: linkedin,
    title: "linkedin",
    link: "https://www.linkedin.com/in/bargady-ahmed-082b30177",
  },
  {
    image: github,
    title: "github",
    link: "https://github.com/AhmedCoolProjects",
  },
  {
    image: twitter,
    title: "twitter",
    link: "https://twitter.com/AhmedBargady?s=09",
  },
];

function SocialIconsC() {
  return (
    <div className="social_icons">
      {icons.map((item) => (
        <Link key={item.title} target="blank_" color="inherit" href={item.link}>
          <IconButton color="inherit">
            <Avatar
              style={{ width: "1.5em", height: "1.5em" }}
              src={item.image}
            />
          </IconButton>
        </Link>
      ))}
    </div>
  );
}

export default SocialIconsC;
