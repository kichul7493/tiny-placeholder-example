import { useState } from "react";
import "./App.css";
import useInput from "./useInput";
import {
  BorderStyle,
  PlaceholderImage,
  PlaceholderImageDownload,
  Shape,
} from "@tiny-placeholder/react";

function App() {
  const [width, setWidth] = useInput("200");
  const [height, setHeight] = useInput("200");
  const [backgroundColor, setBackgroundColor] = useInput("#cccccc");
  const [textColor, setTextColor] = useInput("#333333");
  const [text, setText] = useInput("Placeholder");
  const [fontSize, setFontSize] = useInput("20");
  const [fontFamily, setFontFamily] = useInput("Arial, sans-serif");
  const [borderWidth, setBorderWidth] = useInput("0");
  const [borderColor, setBorderColor] = useInput("#000000");
  const [borderStyle, setBorderStyle] = useState<BorderStyle>("solid");
  const [borderRadius, setBorderRadius] = useInput("0");
  const [shape, setShape] = useState<Shape>("rectangle");

  const handleBorderStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBorderStyle(e.target.value as BorderStyle);
  };

  const handleShape = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShape(e.target.value as Shape);
  };

  return (
    <main>
      <h1>Placeholder image downloader</h1>

      <PlaceholderImage
        options={{
          width: Number(width),
          height: Number(height),
          backgroundColor,
          textColor,
          text,
          fontSize: Number(fontSize),
          fontFamily,
          borderWidth: Number(borderWidth),
          borderColor,
          borderStyle,
          borderRadius: Number(borderRadius),
          shape,
        }}
      />

      <div>
        <PlaceholderImageDownload
          options={{
            width: Number(width),
            height: Number(height),
            backgroundColor,
            textColor,
            text,
            fontSize: Number(fontSize),
            fontFamily,
            borderWidth: Number(borderWidth),
            borderColor,
            borderStyle,
            borderRadius: Number(borderRadius),
            shape,
          }}
        />
      </div>

      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="width">
            Width:
            <input id="width" value={width} onChange={setWidth} />
          </label>
          <label htmlFor="height">
            Height:
            <input id="height" value={height} onChange={setHeight} />
          </label>
          <label htmlFor="backgroundColor">
            Background Color:
            <input
              id="backgroundColor"
              value={backgroundColor}
              onChange={setBackgroundColor}
            />
          </label>

          <label htmlFor="textColor">
            Text Color:
            <input id="textColor" value={textColor} onChange={setTextColor} />
          </label>
          <label htmlFor="text">
            Text:
            <input id="text" value={text} onChange={setText} />
          </label>
          <label htmlFor="fontSize">
            Font Size:
            <input id="fontSize" value={fontSize} onChange={setFontSize} />
          </label>
          <label htmlFor="fontFamily">
            Font Family:
            <input
              id="fontFamily"
              value={fontFamily}
              onChange={setFontFamily}
            />
          </label>
          <label htmlFor="borderWidth">
            Border Width:
            <input
              id="borderWidth"
              value={borderWidth}
              onChange={setBorderWidth}
            />
          </label>
          <label htmlFor="borderColor">
            Border Color:
            <input
              id="borderColor"
              value={borderColor}
              onChange={setBorderColor}
            />
          </label>
          <label htmlFor="borderStyle">
            Border Style:
            <select
              id="borderStyle"
              value={borderStyle}
              onChange={handleBorderStyle}
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </select>
          </label>
          <label htmlFor="borderRadius">
            Border Radius:
            <input
              id="borderRadius"
              value={borderRadius}
              onChange={setBorderRadius}
            />
          </label>
          <label htmlFor="shape">
            Shape:
            <select id="shape" value={shape} onChange={handleShape}>
              <option value="rectangle">Rectangle</option>
              <option value="circle">Circle</option>
              <option value="triangle">Triangle</option>
            </select>
          </label>
        </form>
      </section>
    </main>
  );
}

export default App;
