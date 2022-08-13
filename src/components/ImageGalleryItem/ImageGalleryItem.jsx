import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ url, tags }) {
  return (
    <li className={s.galleryItem}>
      <img className={s.galleryItemImage} src={url} alt={tags} />
    </li>
  );
}
