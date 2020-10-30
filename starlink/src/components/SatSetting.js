import React, {Component} from 'react';

import {
    Form,
    Input,
    Button,
    InputNumber
} from 'antd';

class SatSettingForm extends Component {
    render() {
        const {getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 13 },
            },
        };
        return (
            <Form {...formItemLayout} className="sat-setting" onSubmit={this.showSatellite}>
                <Form.Item label="Longitude(degrees)">
                    {getFieldDecorator('longitude',{
                        rules: [{required: true, message: 'Please input your longitude!'}]
                    })(<InputNumber min={-180} max={180} placeholder="Please enter a longitude" style={{ width: "100%" }}/>)}
                </Form.Item>

                <Form.Item label="Latitude(degrees)">
                    {(<InputNumber min={-180} max={180} placeholder="Please enter a Latitude" style={{ width: "100%" }}/>)}
                </Form.Item>

                <Form.Item label="Elevation(meters)">
                    {(<InputNumber min={-413} max={8850} placeholder="Please input your Elevation" style={{ width: "100%" }}/>)}
                </Form.Item>

                <Form.Item label="Altitude(degrees)">
                    {(<InputNumber min={0} max={90} placeholder="Please input your Altitude" style={{ width: "100%" }}/>)}
                </Form.Item>

                <Form.Item label="Duration(secs)">
                    {(<InputNumber min={0} max={90} placeholder="Please input Duration" style={{ width: "100%" }}/>)}
                </Form.Item>

                <Form.Item className="show-nearby">
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ textAlign: "center" }}>Find Nearby Satellite</Button>
                </Form.Item>
            </Form>
        );
    }

    showSatellite = e =>{
        //step 1: collect data from the form
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                //step2:pass data to Main component
                this.props.onShow(values);
            }
        });


    }
}

const SatSetting = Form.create({ name: "satellite-setting" })(SatSettingForm);

export default SatSetting;