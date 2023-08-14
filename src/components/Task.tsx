import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (
    <label className={styles.taskContainer}>
      <input className={styles.checkbox} type="checkbox" />
      <span className={styles.checkmark}></span>
      <p className={styles.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash size={16} />
      </button>
    </label>
  );
}
