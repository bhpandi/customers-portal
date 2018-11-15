import React from "react";
import { Tabs, Icon, Collapse, Row, Col, Avatar } from "antd";
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const Profile = props => {
  const {
    _id,
    about,
    address,
    company,
    email,
    latitude,
    longitude,
    phone,
    picture,
    name: { first, last },
    registered
  } = props.orderDetails;

  return (
    <Tabs defaultActiveKey="1" animated={false}>
      <TabPane
        tab={
          <span>
            <Icon type="apple" />
            My Account
          </span>
        }
        key="1"
        animated={false}
      >
        <Collapse defaultActiveKey={[]}>
          <Panel
            header={
              <div>
                <Avatar shape="square" size={64} icon="user" />
                <span
                  style={{ paddingLeft: `10px` }}
                >{`${first} ${last}`}</span>
              </div>
            }
            key="1"
          >
            <Row gutter={16}>
              <Col span={12}>
                <p>
                  <label>
                    <strong>Name:</strong>
                  </label>
                  <span>{`${first} ${last}`}</span>
                </p>
                <p>
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <span>{email}</span>
                </p>
                <p>
                  <label>
                    <strong>Phone:</strong>
                  </label>
                  <span>{phone}</span>
                </p>
                <p>
                  <label>
                    <strong>Registered On:</strong>
                  </label>
                  <span>{registered}</span>
                </p>
                <p>
                  <label>
                    <strong>Company:</strong>
                  </label>
                  <span>{company}</span>
                </p>
                <p>
                  <label>
                    <strong>Address:</strong>
                  </label>
                  <span>{address}</span>
                </p>
                <p>
                  <label>
                    <strong>About:</strong>
                  </label>
                  <span>{about}</span>
                </p>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />
            Orders
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </Tabs>
  );
};

export default Profile;
