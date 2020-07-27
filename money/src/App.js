import React, { Component } from 'react';
import {
  CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText, Divider, TableContainer,
  Table, TableHead, TableBody, TableRow, TableCell, Paper
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Window, TitleBar } from 'react-desktop/macOs';
import { makeStyles } from '@material-ui/core/styles';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    fetch('/users.json').then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log('parsed json', json)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    });
    /*
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    });
    */
    const rows = [];
    const classes = makeStyles({
      table: { width: '100%' },
    });
    const list = () => (
      <div>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <Window chrome padding="0px" width="auto">
          <TitleBar title="untitled text 5" controls />
          <CssBaseline />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="App-header-right">Edit <code>src/App.js</code> and save to reload.</div>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </header>
            <Grid container className="App-body">
              <Grid item xs={2}>
                {list()}
              </Grid>
              <Grid item xs={10}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>代码</TableCell>
                        <TableCell align="right">转债名称</TableCell>
                        <TableCell align="right">现价</TableCell>
                        <TableCell align="right">涨跌幅</TableCell>
                        <TableCell align="right">正股名称</TableCell>
                        <TableCell align="right">正股价</TableCell>
                        <TableCell align="right">正股涨跌</TableCell>
                        <TableCell align="right">PB</TableCell>
                        <TableCell align="right">转股价</TableCell>
                        <TableCell align="right">转股价值</TableCell>
                        <TableCell align="right">溢价率</TableCell>
                        <TableCell align="right">纯债价值</TableCell>
                        <TableCell align="right">期权价值</TableCell>
                        <TableCell align="right">回售触发价</TableCell>
                        <TableCell align="right">强赎触发价</TableCell>
                        <TableCell align="right">转债占比</TableCell>
                        <TableCell align="right">持仓机构</TableCell>
                        <TableCell align="right">到期时间</TableCell>
                        <TableCell align="right">剩余年限</TableCell>
                        <TableCell align="right">剩余规模（亿元）</TableCell>
                        <TableCell align="right">成交额（万元）</TableCell>
                        <TableCell align="right">换手率</TableCell>
                        <TableCell align="right">到期税前收益</TableCell>
                        <TableCell align="right">回售收益</TableCell>
                        <TableCell align="right">双低</TableCell>
                        <TableCell align="right">评级</TableCell>
                        <TableCell align="right">操作</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">{row.bondCode}</TableCell>
                          <TableCell align="right">{row.bondName}</TableCell>
                          <TableCell align="right">{row.bondPrice}</TableCell>
                          <TableCell align="right">{row.bondRange}</TableCell>
                          <TableCell align="right">{row.stockName}</TableCell>
                          <TableCell align="right">{row.stockPrice}</TableCell>
                          <TableCell align="right">{row.stockRange}</TableCell>
                          <TableCell align="right">{row.pb}</TableCell>
                          <TableCell align="right">{row.changeStockPrice}</TableCell>
                          <TableCell align="right">{row.changeStockValue}</TableCell>
                          <TableCell align="right">{row.premiumRate}</TableCell>
                          <TableCell align="right">{row.pureBondValue}</TableCell>
                          <TableCell align="right">{row.optionValue}</TableCell>
                          <TableCell align="right">{row.sellbackTrigger}</TableCell>
                          <TableCell align="right">{row.forcedRedemptionTrigger}</TableCell>
                          <TableCell align="right">{row.bondRate}</TableCell>
                          <TableCell align="right">{row.holdingOrganization}</TableCell>
                          <TableCell align="right">{row.dueDate}</TableCell>
                          <TableCell align="right">{row.restYear}</TableCell>
                          <TableCell align="right">{row.remainingScale}</TableCell>
                          <TableCell align="right">{row.turnover}</TableCell>
                          <TableCell align="right">{row.turnover_rate}</TableCell>
                          <TableCell align="right">{row.yieldBeforeMaturity}</TableCell>
                          <TableCell align="right">{row.sellbackProceed}</TableCell>
                          <TableCell align="right">{row.dualLow}</TableCell>
                          <TableCell align="right">{row.score}</TableCell>
                          <TableCell component="th" scope="row">

                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <footer className="App-footer"></footer>
          </div>
        </Window>
      </React.Fragment>
    );
  }
}

export default App;
