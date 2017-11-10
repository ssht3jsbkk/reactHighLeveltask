import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import List from '../List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, purple500} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';



class App extends Component {
  constructor(props)  {
    super(props);
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
    this.state = {
      term:"",
      items:[],
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false
    }
  }

  componentDidMount = () => {

    this.refreshToDos();

  }

    refreshToDos = () =>  {

      fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        // data.payload.map((item) => {
        //   const ToDo = item.todo;
          this.setState({
            items:[...data.payload]
          });
        });
      }

  onChange = (event) => {

    this.setState({

      term: event.target.value

    });

  }

  onComplete = (i) =>  {

    this.setState(
      prevState => ({

        items: [

          ...prevState.items.slice(0,i),
          {
            todo: prevState.items[i].todo,
            complete: !prevState.items[i].complete
          },

          ...prevState.items.slice(i+1)

        ]

      }));

  }




  onSubmit = event => {
    event.preventDefault();
    //fetch
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:JSON.stringify({
        todo: this.state.term
      })
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => console.log(data));
      this.setState({
        items: [...this.state.items, {items: this.state.term}]
      })
    }


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };

  handleToggle = () => this.setState({open: !this.state.open});

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  render() {

    const staticStyle = {padding: 30};
    const fieldStyle = {backgroundColor: 'red', fontSize: 20};
    const styles = {errorStyle: {color: purple500}, floatingLabelStyle: {color: orange500}, root: {display: 'flex',height: 124,flexDirection: 'row',justifyContent: 'space-around'},block: {
    maxWidth: 250,
  }};
    const optionsStyle = {
maxWidth: 255,
marginRight: 'auto',
};

    return (

      <div>
      <AppBar title="My New To-Do List" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <form className= "App" onSubmit = {this.onSubmit}>
        <input value = {this.state.term} onChange={this.onChange} style={{...staticStyle, ...fieldStyle}}/>
        <RaisedButton type="submit" label="Add New Item To This List"/>
        <p>Hello!</p>
      </form>
      <List items={this.state.items} onComplete={this.onComplete}/>
      <TextField floatingLabelText="Enter extra reminder!" floatingLabelStyle={styles.floatingLabelStyle} errorText="This field is required." errorStyle={styles.errorStyle}/>
      <Slider style={{height: 100}} axis="y" defaultValue={0.5} />
      <Slider style={{width: 200}} axis="x-reverse" />
      <Slider style={{height: 100}} axis="y-reverse" defaultValue={1} />
      <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar=""
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  <RaisedButton
          onClick={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help & Feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
        <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>

      </div>

    );
  }
}



export default App;
