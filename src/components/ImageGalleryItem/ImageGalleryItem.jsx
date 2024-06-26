import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <GalleryItem>
        <GalleryImg
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={this.toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
