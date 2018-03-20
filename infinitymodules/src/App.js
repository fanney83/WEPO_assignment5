import React, { Component } from 'react';
import './App.css';
import  Modal  from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import NameCard from './components/NameCard/NameCard';
import Carousel from './components/Carousel/Carousel';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import TimePicker from './components/TimePicker/TimePicker';
import DatePicker from './components/DatePicker/DatePicker';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/CartoonNetworkSpinner';
//import Tab from './components/Tab/Tab';
//import Tabs from './components/Tabs/Tabs';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            tab: 1,
        }
    }

    render() {
        return (
            <div className="App">
                {!this.state.isOpen && <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>}
                <Modal
                    isOpen={this.state.isOpen}
                    onClose={() => this.setState({isOpen: false})}>
                    <Modal.Title>My Modal Title</Modal.Title>
                    <Modal.Body> My Modal Body</Modal.Body>
                    <Modal.Footer> My Modal Footer</Modal.Footer>
                </Modal>
                <ProgressBar
                    progress={50}
                    striped={true}
                    animated={true}
                    state={'success'} />
                <ProgressBar
                    progress={60}
                    striped={true}
                    animated={true}
                    state={'info'} />
                <ProgressBar
                    progress={70}
                    striped={true}
                    animated={true}
                    state={'warning'} />
                <ProgressBar
                    progress={80}
                    striped={true}
                    animated={true}
                    state={'danger'} />
                <NameCard
                    name="Fanney Þóra Vilhjálmsdóttir"
                    email="fanneyv12@ru.is"
                    telephone="+354-866-5544"
                    imageUrl="https://images7.alphacoders.com/633/thumb-350-633262.png"/>
                <Carousel
                    images={[
                        'https://cdn.igromania.ru/mnt/news/9/3/4/c/d/e/68108/d05bf2a226c87c24_848x477.jpg',
                        'https://static.spin.com/files/2018/03/Screen-Shot-2018-03-16-at-10.49.09-AM-1521211786-640x374.png',
                        'http://cdn1-www.comingsoon.net/assets/uploads/2017/12/Screen-Shot-2017-12-14-at-5.13.15-PM-e1513300425439.jpg'
                    ]}
                    size="medium" />
                <Row>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                    <Col size={4}></Col>
                </Row>

                <TimePicker
                    onTimePick={time => this.setState({ time })}
                    format={24} />
                <DatePicker
                    onDatePick={date => this.setState({ date })}
                    locale="en-EN" />
                <Tabs
                    theme="dark"
                    layout="vertical"
                    onSelect={newTab => this.setState({ tab: newTab })}
                    currentSelectedTab={this.state.tab}>
                    <Tab selectionKey={1} title="Tab 1">
                        Content 1
                    </Tab>
                    <Tab selectionKey={2} title="Tab 2">
                        Content 2
                    </Tab>
                    <Tab selectionKey={3} title="Tab 3">
                        Content 3
                    </Tab>
                </Tabs>
                <CartoonNetworkSpinner
                    interval={3}/>

          </div>


    );
  }
}

export default App;
