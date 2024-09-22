import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWithLoader.module.css';

function ImageWithLoader({ src, alt, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.imageContainer}>
      {!loaded && <div className={styles.loader}></div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={loaded ? styles.imageLoaded : styles.imageLoading}
        {...props}
      />
    </div>
  );
}

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageWithLoader;
