import React, { Component } from 'react';
import { Slider, Slide, Caption, MediaBox, Row, Col, Card, CardTitle } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src=" https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" />}>
            <Caption placement="center">
              <h3>
                Pantai
              </h3>
              <h5>
                Dapatkan kesempatan jalan-jalan ke pantai dengan membeli sebuah produk.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://haramaintour.com/blog/wp-content/uploads/2019/09/Kota-Mekkah-Haramain-Tour.jpg" />}>
            <Caption placement="left">
              <h3>
                Mekkah
              </h3>
              <h5>
                atau kesempatan berangkat ke Mekkah.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" />}>
            <Caption placement="right">
              <h3>
                Paris
              </h3>
              <h5>
                atau kesempatan berangkat ke Paris.
               </h5>
            </Caption>
          </Slide>
        </Slider>

        <h5>Hot List</h5>

        <Row>
          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>}>
                Audio Technica <br /> Mulai Dari <span className="red" >Rp 910rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}>
                Handphone Samsung <br /> Mulai Dari <span className="red" >Rp 200rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}>
                Sequishy <br /> Mulai Dari <span className="red" >Rp 5,5 rb</span>
              </Card>
            </Col>
          </MediaBox>

          <MediaBox>
            <Col m={3} s={12}>
              <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avenger</CardTitle>}>
                Koleksi The Avenger <br /> Mulai Dari <span className="red" >Rp 10rb </span>
              </Card>
            </Col>
          </MediaBox>

        </Row>





      </div>
    )
  }
}

export default App;