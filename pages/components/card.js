import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


const Example = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="90%" height="45%" src="/1.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Tetap di rumah</b></CardTitle>
          <CardText>Dirumah saja jika tidak berkepentingan di luar.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="90%" height="45%" src="2.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Gunakan Masker</b></CardTitle>
          <CardText>Selalu gunakan masker jika keluar rumah.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="90%" height="45%" src="3.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Cuci tangan</b></CardTitle>
          <CardText>Selalu cuci tangan deangan sabun jika ingin memasuki rumah atau suatu tempat</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="90%" height="45%" src="4.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><b>Nongkrong pakai Vidcall</b></CardTitle>
          <CardText>Silturahmi tetap terjaga, tidak perlu keluar rumah</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Example;