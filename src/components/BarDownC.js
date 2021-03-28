import { IconButton } from "@material-ui/core";
import React from "react";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function BarDownC() {
  return (
    <div className="bardown_container">
      <div className="bardown_element">
        <img
          alt="image_laptop"
          src={
            "https://www.windows10xnews.com/wp-content/uploads/2020/06/windows_wallpaper_pink-1024x576.jpg"
          }
          style={{
            borderRadius: 8,
            height: "95%",
            objectFit: "cover",
            width: "25%",
          }}
        />
        <div className="bardown_text">
          <strong>Windows 10X</strong>
          <p>
            watch the presentation of the new lightweight virsion of Windows 10
            with unified drivers, without support for Win32 applications.
          </p>
        </div>
      </div>
      <div className="bardown_element">
        <img
          style={{
            height: "95%",
            objectFit: "cover",
            width: "25%",
            borderRadius: 8,
          }}
          src={
            "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/149591-laptops-news-microsofts-stripped-down-windows-will-be-called-windows-10x-image1-xmutj6ivlo.jpg"
          }
          alt="image_laptop"
        />
        <div className="bardown_text">
          <strong>Windows 10 with Android</strong>
          <p>
            Other Bowden sources say the company is considering intergrating
            Android applications with Microsoft Store in 2021.
          </p>
        </div>
      </div>
      <div className="bardown_social">
        <IconButton>
          <img
            src={instagram}
            alt="instagram"
            style={{ width: "1em", height: "1em" }}
          />
        </IconButton>
        <IconButton>
          <img
            src={youtube}
            alt="youtube"
            style={{ width: "1em", height: "1em" }}
          />
        </IconButton>
        <IconButton>
          <img
            src={tiktok}
            alt="tiktok"
            style={{ width: "1em", height: "1em" }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default BarDownC;
