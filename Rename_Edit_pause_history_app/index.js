import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';

/* For materailDesign */
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class App extends Component {
  constructor() {
    super();
    this.state = {
      campaing: [],
      isEditopen: false,
      selectedIndex: -1,
      historyCounter: 0,
      history: {
      },
      currentUser: 'Rahul'
    };
  }

  _setUser = (name) => this.setState({
    currentUser: name
  })

  _addNewCampaigne = () => {
    const newHistory = {
      ...this.state.history,
      [this.state.historyCounter]: ["Campaing created |" + this.state.currentUser + " created a campaing at " + new Date().toLocaleTimeString()]
    }
    const newHistoryCounter = this.state.historyCounter + 1
    this.setState({
      campaing: [...this.state.campaing, "No-name" + "|" + new Date().toLocaleTimeString()],
      history: newHistory,
      historyCounter: newHistoryCounter
    })
  }

  _deleteCampaing = (index) => {
    const newHistory = { ...this.state.history }
    delete newHistory[index];

    const updatedHistory = {};
    Object.keys(newHistory).forEach((key, i) => {
      updatedHistory[i] = newHistory[key]
    })

    const newHistoryCounter = this.state.historyCounter - 1;
    const newcampaing = [...this.state.campaing]
    newcampaing.splice(index, 1);
    this.setState({
      campaing: newcampaing,
      history: updatedHistory,
      historyCounter: newHistoryCounter
    })
  }

  _rename = (index, newName) => {
    const newHistory = { ...this.state.history };
    const newActions = [...newHistory[index]];
    const str = "Campaing renamed |" + this.state.currentUser + " renamed a campaing to " + newName + " at " + new Date().toLocaleTimeString()
    newActions.push(str)
    newHistory[index] = newActions;

    const newcampaing = [...this.state.campaing];
    newcampaing[index] = newName + "|" + new Date().toLocaleTimeString()
    this.setState({
      campaing: newcampaing,
      history: newHistory,
    })
  }

  _handleClose = () =>
    this.setState({
      isEditopen: false
    });

  _handleOpen = (index) =>
    this.setState({
      isEditopen: true,
      selectedIndex: index
    });

  _handlePause = (index) => {
    const newHistory = { ...this.state.history }
    const newActions = [...newHistory[index]]
    const str = "Campaing paused |" + this.state.currentUser + " paused a campaing at " + new Date().toLocaleTimeString();
    newActions.push(str)
    newHistory[index] = newActions;

    this.setState({
      history: newHistory
    })
  }

  _handleListItemClick = (index) => this.setState({
    selectedIndex: index
  })

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              <Icon fontSize="large" style={{ verticalAlign: 'middle' }}>notes</Icon>
              &nbsp;campaing Lists
                <Button
                style={{ marginLeft: 30 }}
                onClick={this._addNewCampaigne} variant="contained" color="secondary" >
                <Icon>add_icon</Icon>Create new
               </Button>
            </Typography>
            <Profile setUser={this._setUser} currentUser={this.state.currentUser} />
            <ListComponent
              selectedIndex={this.state.selectedIndex}
              campaing={this.state.campaing}
              handlePause={this._handlePause}
              deleteCampaing={this._deleteCampaing}
              handleListItemClick={this._handleListItemClick}
              handleOpen={this._handleOpen} />
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'center', }}>
            <Typography variant="h5" gutterBottom>
              <Icon fontSize="large" style={{ verticalAlign: 'middle' }}>history</Icon>
              &nbsp;History
            </Typography>
            <HistoryPanel historyList={this.state.history[this.state.selectedIndex]} />
          </Grid>
        </Grid>
        {this.state.isEditopen ?
          <EditForm
            index={this.state.selectedIndex}
            name={this.state.campaing[this.state.selectedIndex]}
            rename={this._rename}
            open={this.state.isEditopen}
            close={this._handleClose} />
          : null}

      </React.Fragment>
    );
  }
}

/*Const profile */
const Profile = (props) => (
  <React.Fragment>
    <Button
      style={{ marginLeft: 15 }}
      onClick={() => props.setUser('Rahul')} variant="contained"
      color={props.currentUser === "Rahul" ? "secondary" : null} >
      <Icon>perm_identity</Icon>Rahul
      </Button>

    <Button
      style={{ marginLeft: 15 }}
      onClick={() => props.setUser('Bishal')} variant="contained"
      color={props.currentUser === "Bishal" ? "secondary" : null} >
      <Icon>perm_identity</Icon>Bishal
      </Button>
  </React.Fragment>
)

/*for List component to be renderd */
const ListComponent = (props) => {
  const listStyle = {
    backgroundColor: 'beige',
  }
  const listBody = {
    cursor: 'pointer'
  }
  return (
    <React.Fragment>
      <List >
        {props.campaing.map(
          (camp, index) => (
            <ListItem
              key={index}
              style={index === props.selectedIndex ? listStyle : listBody}
              onClick={() => props.handleListItemClick(index)}>
              <ListItemIcon>
                <Button variant="fab" mini color="primary">
                  {index + 1}
                </Button>
              </ListItemIcon>
              <ListItemText
                primary={"Capaing - " + (index + 1) + " : " + camp.split("|")[0]}
                secondary={'Last action at ' + camp.split("|")[1]}
              />
              <ActionButtons
                handlePause={() => props.handlePause(index)}
                handleOpen={() => props.handleOpen(index)}
                deleteCampaing={() => props.deleteCampaing(index)}
                index={index} />
            </ListItem>
          )
        )}
      </List >
    </React.Fragment>
  )
}


/ * For Button */
const ActionButtons = (props) => {
  const style = {
    margin: 5
  }
  return (
    <React.Fragment>
      <Button onClick={props.handlePause}
        variant="fab" mini color="secondary" aria-label="Add" style={style}>
        ||
      </Button>

      <Button onClick={props.deleteCampaing}
        variant="fab" mini color="secondary" aria-label="Add" style={style}>
        <DeleteIcon />
      </Button>

      <Button onClick={props.handleOpen}
        variant="fab" mini color="secondary" aria-label="Add" style={style}>
        <Icon>edit_icon</Icon>
      </Button>
    </React.Fragment>
  )
}

/* for Edit form */
class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name.split("|")[0] : ''
    }
  }


  _handleSaveClose = () => {
    this.props.rename(this.props.index, this.state.name);
    this.props.close();
  }
  render() {
    return (
      <div>
        <Dialog
          open={true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit campaing Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Edit campaing Name enter a name and click ok.
            </DialogContentText>
            <TextField
              onChange={(e) => this.setState({ name: e.target.value })}
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              value={this.state.name}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              Cancel
            </Button>
            <Button onClick={this._handleSaveClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


/* for History */
const HistoryPanel = (props) => (
  <React.Fragment>
    {props.historyList ? props.historyList.map((history) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{history.split("|")[0]}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {history.split("|")[1]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )) :
      null
    }
  </React.Fragment>
);




render(<App />, document.getElementById('root'));
