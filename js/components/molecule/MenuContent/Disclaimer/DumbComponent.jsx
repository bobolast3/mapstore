import React from "react";
import Paragraph from "../../Paragraph/DumbComponent";
import MenuOverlayBottomSection from "../../MenuOverlayBottomSection/DumbComponent";

const Disclaimer = () => {
  return (
    <div className="menu-content--disclaimer">
      <Paragraph>
        <h2>important</h2>
        <p>
          Sea level records show that currently the sea-level on South African
          coasts rises between 1.5 and 2.7mm per year, depending on the
          location. While climate scenarios predict an increase in coastal storm
          frequency and intensity projecting storm-related flood levels is less
          simple.
        </p>
        <p>
          This tool intends to give a first indication on which areas are at
          risk of flooding. It can be used for populated areas but also for
          currently undeveloped areas to assess whether future development might
          be at risk.
        </p>
        <p>
          Integrating climate change adaptation and disaster risk reduction
          measures through a risk management approach will help to reduce future
          losses from flood events.
        </p>
        <p>
          Use of the tool is free and the CSIR carries no risk in the outcomes
          thereof. Feedback on the tool is welcome to help us to improve it
          further.
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />

      {/*<div className="menu-content--disclaimer__image-mask"></div>*/}
    </div>
  );
};

export default Disclaimer;
