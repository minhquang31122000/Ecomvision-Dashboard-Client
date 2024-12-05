import React, { useEffect } from "react";
import { useTheme } from "@mui/system";
import { useGetGeographyQuery } from "store/api";
import { Box } from "@mui/material";
import { Header } from "components";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "store/geoData";
import { useDispatch } from "react-redux";
import { setIsShowGlobalLoading } from "store";

const Geography = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsShowGlobalLoading(true));
    } else {
      dispatch(setIsShowGlobalLoading(false));
    }
  }, [isLoading, dispatch]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subTitle="Find where your users are located" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={152}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
