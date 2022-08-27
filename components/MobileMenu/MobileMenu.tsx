import styles from './MobileMenu.module.scss';

import React, {useContext} from 'react';
import { categorySlugs } from '../../helpers/variables';
import { formatSlug } from '../../helpers/functions';
import { AppContext } from '../../context/app-state';

const MobileMenu = () => {
  const context = useContext(AppContext);
  const {setMobileMenu} = context;

  return (
    <div className={styles.container}>
      <i onClick={() => setMobileMenu(false)} className="fa-solid fa-xmark"></i>
      <ul>
        {categorySlugs.map(slug => (
          <li key={slug}>{formatSlug(slug)}</li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu