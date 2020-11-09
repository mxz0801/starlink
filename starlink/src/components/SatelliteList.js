import React, {Component} from 'react';
import {Button,List,Avatar,Checkbox,Spin} from 'antd';
import satellite from "../assets/images/satellite.svg";

class SatelliteList extends Component {
    state = {
        selected:[],
        isLoad : false
    }
    render() {
        const satList = this.props.satInfo?this.props.satInfo.above:[];
        const {isLoad} = this.props;
        const {selected} = this.state;
        return (
            <div className="sat-list-box">
                <div className='btn-container'>
                    <Button className="sat-list-btn"
                            type={"primary"}
                            disabled={selected.length === 0}
                            onClick={this.onShowSatMap}
                            size="large">Track on the map</Button>
                </div>

                <hr/>
                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip={'loading'}
                            size={"large"}/>
                        </div>
                        :
                        <List className="sat-list"
                              itemLayout="horizontal"
                              size="small"
                              dataSource={satList}
                              renderItem = {item => (
                                  <List.Item
                                      actions = {[<Checkbox dataInfo={item} onChange={this.onChange} />]}
                                  >
                                      <List.Item.Meta
                                          avatar={ <Avatar size={50}
                                              src={satellite}/>}
                                          title={<p>{item.satname}</p>}
                                          description={`Launch Date: ${item.launchDate}`}
                                      />
                                  </List.Item>
                              )}
                        />
                }

            </div>
        );
    }

    onChange = (e) =>{
        console.log('clicked', e.target);
        //step1: satellite checked?
        const{dataInfo, checked} = e.target;

        //step 2: get selected list
        const {selected} = this.state;

        //step 3: get new selected list
        const list = this.addOrRemove(dataInfo, checked, selected);

        //step 4: update selected satellite list
        this.setState({
            selected: list
        });
    }

    addOrRemove = (dataInfo, checked, list) => {
        //case1: checked is true
        //      item not in the list -> add it
        //      item is in the list -> do nothing


        //case 2: checked is false
        //      item is in the list -> remove it
        //      item is not in the list -> do nothing

        const found = list.some(item => item.satid ===dataInfo.satid);
        if(checked && !found){
            list.push(dataInfo);
        }

        if(!checked && found){
            list = list.filter(item => item.satid ===dataInfo.satid);
        }
        return list;
    }

    onShowSatMap =() => {
        // const {selected} = this.state;
        // this.props.onShowSatMap(selected);
        this.props.onShowMap(this.state.selected);
    }
}

export default SatelliteList;