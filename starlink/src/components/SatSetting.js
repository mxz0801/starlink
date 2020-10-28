import React, {Component} from 'react';

import {
    Form,
    Input,
    Button,
    InputNumber
} from 'antd';

class SatSetting extends Component {
    render() {
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
            <Form {...formItemLayout}>
                <Form.Item label="Longitude(degrees)">
                    {(<InputNumber min={-180} max={180} placeholder="Please enter a longitude" />)}
                </Form.Item>

                <Form.Item label="Latitude(degrees)">
                    {(<InputNumber min={-180} max={180} placeholder="Please enter a Latitude" />)}
                </Form.Item>
            </Form>
        );
    }
}

export default SatSetting;