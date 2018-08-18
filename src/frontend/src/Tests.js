import {
  XYPlot,
  AreaSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  makeWidthFlexible
} from "react-vis";
import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

export const TestTrend = () => (
  <FlexibleXYPlot height={200}>
    <AreaSeries
      data={[
        {
          x: 0,
          y: 10
        },
        {
          x: 1,
          y: 9.551028711317814
        },
        {
          x: 2,
          y: 9.63533172641976
        },
        {
          x: 3,
          y: 9.165670058597497
        },
        {
          x: 4,
          y: 9.040600552229478
        },
        {
          x: 5,
          y: 9.553425153398893
        },
        {
          x: 6,
          y: 9.683821210665267
        },
        {
          x: 7,
          y: 9.906013933587875
        },
        {
          x: 8,
          y: 10.022866777782477
        },
        {
          x: 9,
          y: 9.604113804308321
        },
        {
          x: 10,
          y: 9.505108657319203
        },
        {
          x: 11,
          y: 9.055634929326725
        },
        {
          x: 12,
          y: 8.606501873717235
        },
        {
          x: 13,
          y: 7.968705983087247
        },
        {
          x: 14,
          y: 7.201086999049121
        },
        {
          x: 15,
          y: 7.599614358711625
        },
        {
          x: 16,
          y: 7.484592900857076
        },
        {
          x: 17,
          y: 7.23790194151506
        },
        {
          x: 18,
          y: 7.900200993313622
        },
        {
          x: 19,
          y: 7.369869175820791
        },
        {
          x: 20,
          y: 7.520210185722864
        }
      ]}
      opacity={0.25}
      style={{}}
    />
    <AreaSeries
      data={[
        {
          x: 0,
          y: 10
        },
        {
          x: 1,
          y: 9.956518964733437
        },
        {
          x: 2,
          y: 9.583975188290863
        },
        {
          x: 3,
          y: 9.387589448208546
        },
        {
          x: 4,
          y: 10.22432433088042
        },
        {
          x: 5,
          y: 10.360327322505935
        },
        {
          x: 6,
          y: 10.442186792516212
        },
        {
          x: 7,
          y: 10.640775122990732
        },
        {
          x: 8,
          y: 10.402826478042696
        },
        {
          x: 9,
          y: 10.798135082543022
        },
        {
          x: 10,
          y: 10.335014567139932
        },
        {
          x: 11,
          y: 9.951168191100962
        },
        {
          x: 12,
          y: 10.051257189378896
        },
        {
          x: 13,
          y: 10.753374039133778
        },
        {
          x: 14,
          y: 10.661125093530758
        },
        {
          x: 15,
          y: 9.987054281641123
        },
        {
          x: 16,
          y: 10.135444617590188
        },
        {
          x: 17,
          y: 9.708158081202686
        },
        {
          x: 18,
          y: 9.36066647283238
        },
        {
          x: 19,
          y: 9.799672756826793
        },
        {
          x: 20,
          y: 9.732008071946717
        }
      ]}
      opacity={0.25}
      style={{}}
    />
    <AreaSeries
      data={[
        {
          x: 0,
          y: 10
        },
        {
          x: 1,
          y: 9.49158350928336
        },
        {
          x: 2,
          y: 10.065607067834504
        },
        {
          x: 3,
          y: 9.91355818090523
        },
        {
          x: 4,
          y: 9.647953067321737
        },
        {
          x: 5,
          y: 9.805358500671868
        },
        {
          x: 6,
          y: 10.384792189666358
        },
        {
          x: 7,
          y: 9.781341985406113
        },
        {
          x: 8,
          y: 9.661276309030674
        },
        {
          x: 9,
          y: 10.020655347772788
        },
        {
          x: 10,
          y: 9.394192678269603
        },
        {
          x: 11,
          y: 9.324547801856335
        },
        {
          x: 12,
          y: 8.735452584296095
        },
        {
          x: 13,
          y: 8.250382503444191
        },
        {
          x: 14,
          y: 8.164334427050555
        },
        {
          x: 15,
          y: 8.80754110468218
        },
        {
          x: 16,
          y: 9.078216036713497
        },
        {
          x: 17,
          y: 9.186727426542106
        },
        {
          x: 18,
          y: 9.729002039440362
        },
        {
          x: 19,
          y: 9.663650921506012
        },
        {
          x: 20,
          y: 9.60613096657219
        }
      ]}
      opacity={0.25}
      style={{}}
    />
  </FlexibleXYPlot>
);

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {" "}
            <TestTrend />
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export const Tests = withStyles(styles, { withTheme: true })(FullWidthTabs);
