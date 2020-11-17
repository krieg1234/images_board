import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { hideModalAction, postComment } from '../actions/actions'

const mapStateToProps = (state) => {
  const props = {
    images: state.images,
    showModal: state.modalContent.showModal,
    modalImgUrl: state.modalContent.modalImgUrl,
    modalComments: state.modalContent.comments,
    id: state.modalContent.id,
    isCommentPosting: state.status.isCommentPosting,
  };
  return props;
};

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userComment: '',
    }
  }

  hideModalHandler = (e) => {
    const { dispatch } = this.props;
    dispatch(hideModalAction());
  };

  addCommentHandler = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { userName, userComment } = this.state;
    dispatch(postComment({
      userName,
      userComment,
      id: this.props.id,
    }));
    this.setState({ userComment: '' });
  };

  userNameInputHandler = (e) => {
    const { value } = e.target;
    this.setState({ userName: value });
  }

  userCommentInputHandler = (e) => {
    const { value } = e.target;
    this.setState({ userComment: value });
  }

  render() {
    const { showModal, modalImgUrl, modalComments, isCommentPosting } = this.props;
    const { userName, userComment } = this.state;

    return (
      <Modal show={showModal} onHide={this.hideModalHandler} size="lg" >
        <Modal.Header closeButton />
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Image fluid src={modalImgUrl} />
              <Form onSubmit={this.addCommentHandler}>
                <Form.Group >
                  <Form.Control className='userName my-4' placeholder='Ваше имя' value={userName} onChange={this.userNameInputHandler}></Form.Control>
                  <Form.Control className='userComment my-4' placeholder='Ваш комментарий' value={userComment} onChange={this.userCommentInputHandler}></Form.Control>
                  <Button className='w-100' variant="primary" type="submit" disabled={isCommentPosting}>Оставить комментарий</Button>
                </Form.Group>
              </Form>
            </Col>
            <Col md={6}>
              {modalComments.map(comment => (<div className='mb-4' key={comment.id}>
                <div style={{ color: "gray" }}>{new Date(comment.date).toLocaleDateString()}</div>
                <p style={{ 'overflow-wrap': 'break-word' }}>{comment.text}</p>
              </div>))}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  };
};

export default connect(mapStateToProps)(ModalWindow);