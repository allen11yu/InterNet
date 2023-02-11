import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return(
      <footer>
        <p>&copy;InterNet 2021</p>
        <p>Questions? Contact us at: support@intern.net</p>
        <div className='row'>
          <div className='icon'>
            <a href="mailto:support@intern.net" aria-label="email us">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <div className='icon'>
            <a href="https://www.facebook.com/" aria-label="facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>

          <div className='icon'>
            <a href="https://www.twitter.com/" aria-label="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

          <div className="icon">
            <a href="https://www.instagram.com/" aria-label="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    )
}