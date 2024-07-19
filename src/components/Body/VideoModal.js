import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default VideoModal=(props)=> {
    const {show,data,onHide}=props
    console.log("vm",data)
  return (
    <Modal
      show={show}
      onHide={()=>onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>

      <video width="320" height="240" controls>
  <source src={data} type="video/mp4"/>
  {/* <source src="movie.ogg" type="video/ogg"/> */}
  Your browser does not support the video tag.
    </video>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

