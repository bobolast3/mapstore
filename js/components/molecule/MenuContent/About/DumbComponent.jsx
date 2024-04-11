import React from "react";
import Tabs from "../../TabComponent/DumbComponent";
import nasaLightImg from "../../../../../assets/nasa_lights.jpg";
import mappedAreaImg from "../../../../../assets/CoastSHORE_Floodslider-coverage_october2018.jpg";
import Image from "../../ImageCaptioned/DumbComponent";
import Paragraph from "../../Paragraph/DumbComponent";
import MenuOverlayBottomSection from "../../MenuOverlayBottomSection/DumbComponent";
import List from "../../../atom/List/DumbComponent";

const ContextComponent = () => {
  return (
    <>
      <Paragraph>
        <h2>The Context</h2>
        <p>
          “Warming of the climate system is unequivocal, and since the 1950s,
          many of the observed changes are unprecedented over decades to
          millennia. The atmosphere and ocean have warmed, the amounts of snow
          and ice have diminished, and sea level has risen.”{" "}
          <a href={"https://www.ipcc.ch/report/ar5/"}>
            IPCC5 Synthesis report.
          </a>{" "}
        </p>
        <p>
          The Intergovernmental Panel on Climate Change in its 5 th report from
          2014 points out that the climate is changing, globally leading to
          higher atmospheric and ocean temperatures, sea level rise and a change
          in general weather patterns.
        </p>
        <p>
          Globally the sea level is to rise between 0.4 and 1.0m (
          <a
            href={
              "https://www.ipcc.ch/pdf/assessment-report/ar5/wg1/WG1AR5_Chapter13_FINAL.pdf"
            }
          >
            IPCC5-Chapter 13, page 1181
          </a>
          ), threatening to flood low lying coastal areas. This is of concern as
          currently about 40% of the world’s population are living within 100km
          of the Earth’s ocean’s coasts and many key economic infrastructure is
          located there.
        </p>
      </Paragraph>
      <Image
        src={nasaLightImg}
        alt="nasa light"
        caption={
          "Concentration of Global Population indicated by illuminated areas at night. (Source: NASA)"
        }
      />
      <Paragraph>
        <p>
          Further, for Southern Africa, an increase in ocean storm frequency and
          intensity is expected. This will lead to an increase in storm surges,
          exacerbating the risk of flooding specifically of low-lying coastal
          areas, putting livelihoods and coastal economies even more at risk.
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />
    </>
  );
};

const PurposeComponent = () => {
  return (
    <Paragraph>
      <h2>The Purpose of this Tool</h2>
      <p>
        In order to identify coastal areas at risk of flooding and to aid
        climate change adaptation, the South African Department of Environmental
        Affairs under the umbrella of{" "}
        <a
          href={
            "https://www.environment.gov.za/projectsprogrammes/operationphakisa/oceanseconomy"
          }
        >
          Operation Phakisa Ocean Economy
        </a>{" "}
        has commissioned the development of a Coastal Flood Risk Visualisation
        tool – which is what you are exploring right now.
      </p>
      <p>
        The development of this interactive tool has been inspired by other
        internationally available tools, such as the Coastal Risk{" "}
        <a href={"http://www.coastalrisk.com.au/viewer"}>Australia Viewer</a>{" "}
        and the{" "}
        <a href={"https://coast.noaa.gov/slr/"}>Sea Level Rise Viewer</a> in the
        U.S., just to name a few.
      </p>
      <p>
        Based on the data available for South Africa, our aim is to provide a
        tool that allows e.g. disaster managers, spatial planners and the
        general public an estimation of coastal areas that are potentially at
        risk of flooding.
      </p>
      <p>
        Coastal flooding however, is only one aspect of risks threatening
        coastal livelihoods and infrastructure. This version of the tool does
        NOT consider e.g. effects of coastal erosion and e.g. the breach of
        coastal protective structures in the event of a storm, nor does it
        consider hydrological aspects or additional sources of flooding during a
        storm such as raising ground water or increased flow rates from rivers
        in the hinterland. The developers are aware that more detailed local
        studies may be required to ensure that particular local circumstances
        and dynamics are adequately considered in any adaptation or disaster
        response context. Further research and development towards this goal is
        currently underway.
      </p>
      <MenuOverlayBottomSection />
    </Paragraph>
  );
};

const MappedComponent = () => {
  return (
    <>
      <Image src={mappedAreaImg} alt="mapped areas" />
      <MenuOverlayBottomSection />
    </>
  );
};

const TerrainDataComponent = () => {
  return (
    <>
      <Paragraph>
        <h2>3D Terrain data</h2>
        <p>
          The certainty of coastal flood risk modelling depends heavily on
          spatially very detailed and accurate digital elevation models (
          <a href="http://www.jcronline.org/doi/abs/10.2112/SI53-006.1?code=cerf-site">
            Gesch, 2009
          </a>
          ). For the development of the South African Coastal Flood Risk Viewer
          we therefore aimed on using high-resolution airborne LiDAR (Light
          Detection and Ranging) data as main 3D data source for this tool. A
          technical introduction to LiDAR for coastal applications can be found{" "}
          <a href="https://coast.noaa.gov/digitalcoast/training/intro-lidar.html">
            here
          </a>
          .
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />
    </>
  );
};

const CoverageComponent = () => {
  const listData = [
    "ALEXCOR",
    "The Western Cape Province",
    "The City of Cape Town",
    "The KwaZulu Natal Province",
    "iSimangaliso Wetland Park",
  ];
  return (
    <>
      <Paragraph>
        <h2>Coverage of the data</h2>
        <p>
          These data are covering parts of the Northern Cape Province, the
          Western Cape Province and parts for the KwaZulu-Natal Province. The
          data sets used for the development of this tool were kindly made
          available by:
        </p>
        <List items={listData} />
        <p>
          Parts of the Northern Cape and the Eastern Cape are not covered
          currently. We are currently busy trying to fill these gaps too.
        </p>
      </Paragraph>

      <MenuOverlayBottomSection />
    </>
  );
};

const ProcessingComponent = () => {
  return (
    <>
      <Paragraph>
        <h2>Processing of the data</h2>
        <p>
          Coming from different data sources, the data first were normalised,
          the vertical datum set to Mean Sea Level (i.e. an elevation of 0.0
          meters in the tool is equal to the current mean sea level). The data
          were then rasterised to 1x1m to 5x5m pixel size, depending on the
          point density of the original LiDAR data sets.
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />
    </>
  );
};

const BathTubModelComponent = () => {
  return (
    <>
      <Paragraph>
        <h2>Flood modelling using the Bath Tub</h2>
        <p>
          For all elevations between 0m and 11m above mean sea level, 10cm
          contours have been generated and colour coded in shades of blue. This
          type of flood modelling is called “bath tub flood modelling”. This is
          what you see when you move up and down the Water level slider on the
          left of the Tool. Elevations higher than 11m above Mean Sea Level are
          considered to be safe from flooding for most realistic local storm
          scenarios and were thus not included in the flood modelling. The
          colour coding was applied to all low-lying areas below 11m,
          irrespective if the areas are directly connected to the coast or
          located somewhere in the hinterland. While this approach is commonly
          applied for this type of flood visualisation tools, it is creating
          “false-positive” flood indications for those non-coastal low-lying
          hinterland areas. We are aware of this weakness, and a more advanced
          version of this tool which is currently under development will account
          for this circumstance. The resulting flood layers were further cleaned
          up to fill data gaps and remove noise in the original LiDAR data.
          While we are applying the utmost diligence to the processing, we
          cannot exclude that we missed the one or other erroneous area. If you
          come across such an error, please let us know!
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />
    </>
  );
};

const OnlineToolComponent = () => {
  return (
    <>
      <Paragraph>
        <h2>Generation of the Online Tool</h2>
        <p>
          For presenting the data online, an Open Source WebApp tool was used
          and tailored for our needs. The background of the map window provides
          the choice between several{" "}
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>{" "}
          data sets.
        </p>
      </Paragraph>
      <MenuOverlayBottomSection />
    </>
  );
};

const technicalBackgroundTabs = [
  {
    title: "3D Terrain Data",
    content: <TerrainDataComponent />,
  },
  {
    title: "Coverage",
    content: <CoverageComponent />,
  },
  {
    title: "Processing",
    content: <ProcessingComponent />,
  },

  {
    title: "Bath Tub Model",
    content: <BathTubModelComponent />,
  },
  {
    title: "Online Tool",
    content: <OnlineToolComponent />,
  },
];

const TechnicalComponent = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Tabs tabs={technicalBackgroundTabs} fontSize="14px" />
    </div>
  );
};

const primaryTabs = [
  {
    title: "The Context",
    content: <ContextComponent />,
  },
  {
    title: "Purpose of this tool",
    content: <PurposeComponent />,
  },
  {
    title: "Technology Background",
    content: <TechnicalComponent />,
  },

  {
    title: "Mapped Areas",
    content: <MappedComponent />,
  },
];

const DumbComponent = () => {
  return <Tabs tabs={primaryTabs} />;
};

export default DumbComponent;
