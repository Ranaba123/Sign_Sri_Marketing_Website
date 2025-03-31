import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";

function camera() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 640, height: 480 });

  // Function to update dimensions based on viewport
  const updateDimensions = () => {
    const viewportWidth = Math.min(window.innerWidth, 640);
    const aspectRatio = 480 / 640;
    const calculatedHeight = viewportWidth * aspectRatio;
    
    setDimensions({
      width: viewportWidth,
      height: calculatedHeight
    });
  };

  // Main function
  const runCoco = async () => {
    // Load network
    const net = await tf.loadGraphModel('https://mystorageblob123.blob.core.windows.net/mycontainer/model.json');
    
    // Loop and detect objects
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast('int32');
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      
      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();
      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // Update drawing utility
      requestAnimationFrame(() => {
        drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx);
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    // Initialize dimensions
    updateDimensions();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    
    // Run object detection
    runCoco();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div 
          className="webcam-container"
          style={{
            maxWidth: '100%',
            position: 'relative',
            width: dimensions.width,
            height: dimensions.height,
            margin: '0 auto'
          }}
        >
          <Webcam
            ref={webcamRef}
            muted={true}
            style={{
              position: "absolute",
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              left: 0,
              right: 0
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              width: '100%',
              height: '100%',
              left: 0,
              right: 0
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default camera;