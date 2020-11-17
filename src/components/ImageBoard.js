import React from 'react';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getImagesList, showModalAction } from '../actions/actions'
import ModalWindow from './ModalWindow'

const mapStateToProps = (state) => {
  const props = {
    images: state.images,
    showModal: state.modalContent.showModal,
    modalImgUrl: state.modalContent.modalImgUrl,
    modalComments: state.modalContent.comments,
  };
  return props;
};

class ImageBoard extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getImagesList);
  }

  showModalHandler = (id) => (e) => {
    const { dispatch } = this.props;
    dispatch(showModalAction({ id }));
  }

  render() {
    const { byId, allImages } = this.props.images;

    return (
      <div>
        {allImages.map(id => (
          <Image className='m-2 ' key={id} src={byId[id]} onClick={this.showModalHandler(id)} />
        ))}
        <ModalWindow />
      </div>
    );
  };
};

export default connect(mapStateToProps)(ImageBoard);