import React from "react";
import "../runline/runline.css";
import cursivingText from "../../functions/cursivingText";

export default function Runline({ text }) {
  const ready = cursivingText(text);

  return (
    <div className="runline noselect">
      <div className="runline__container">
        {/*  <p
          className="runline__item"
          dangerouslySetInnerHTML={{ __html: ready }}
        />
        <p
          className="runline__item"
          dangerouslySetInnerHTML={{ __html: ready }}
        />
        <p
          className="runline__item"
          dangerouslySetInnerHTML={{ __html: ready }}
        /> */}
      </div>
    </div>
  );
}
