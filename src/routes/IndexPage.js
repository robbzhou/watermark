import Block from 'dxc-flex';
import React from 'react';
import Main from './Main/Main';
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px 15px' }}>
        <div style={{ textAlign: 'center', fontSize: 18, fontWeight: 700, marginBottom: 15 }}>
          无上传，纯前端图片加水印，保证个人信息安全
        </div>
        <Main />
        <Block
          vertical='center'
          horizontal='center'
          style={{
            padding: '20px 0 0',
          }}>
          Developed by&nbsp;
          <a
            target='_blank'
            href='https://github.com/dxcweb/watermark'
            style={{ color: '#1890ff' }}>
            DXCWeb
          </a>
          , published by&nbsp;
          <a target='_blank' href='https://github.com/funnyzak/watermark' style={{ color: '#1890ff' }}>
            Funnyzak
          </a>
        </Block>
      </div>
    );
  }
}
