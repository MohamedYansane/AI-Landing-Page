"use client";

import { useEffect } from "react";

const IframeWidget = () => {
  useEffect(() => {
    // Creating the iframe
    const iframe = document.createElement("iframe");
    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add("chat-frame");

    //append styles for the iframe
    const style = document.createElement("style");
    style.textContent = `.chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
        }`;
    document.head.append(style);

    //append the iframe to the body
    document.body.appendChild(iframe);

    //handle post message logic

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "http://localhost:3000") return null;
      try {
        let dimensions = JSON.parse(e.data);
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;
        iframe.contentWindow?.postMessage(
          "f8380099-8483-47d3-b333-f9e659176d69",
          "http://localhost:3000/"
        );
      } catch (error) {
        console.log("Failed to handle iframe message", error);
      }
    };
    window.addEventListener("message", handleMessage);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      iframe.remove();
      style.remove();
    };
  }, []);
  //this component only manipulate the Dom, no rendering is needed
  return null;
};

export default IframeWidget;
