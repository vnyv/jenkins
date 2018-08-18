import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Tests } from "./Tests";
import Badge from "@material-ui/core/Badge";
import { Builds } from "./Build";
import { Code } from "./Code";
import red from "@material-ui/core/colors/red";
import { Logs } from "./Build";
import Paper from "@material-ui/core/Paper";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color={"tomato"}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Builds" />
            <Tab
              label={
                <Badge
                  className={classes.padding}
                  color={"primary"}
                  badgeContent={4}
                >
                  {`Tests....`}
                </Badge>
              }
            />
            <Tab label="Code quality" href="#basic-tabs" />
            <Tab label="Performance" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Builds />
            <Logs />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Tests />
          </TabContainer>
        )}
        {value === 2 && <TabContainer> Code quality </TabContainer>}
        {value === 3 && (
          <TabContainer>
            <Tests />
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
