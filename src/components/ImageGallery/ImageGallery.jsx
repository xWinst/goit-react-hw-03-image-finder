import React from 'react';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components';

export default class ImageGallery extends React.Component {
  state = {
    status: '',
  };

  count = 0; /////////////

  render() {
    const gallery = this.props.images;
    console.log('render Gallery #', ++this.count, gallery); ////

    if (gallery.length > 0) {
      return (
        <ul className={s.gallery}>
          {gallery.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} url={webformatURL} tags={tags} />
          ))}
        </ul>
      );
    }
  }
}
