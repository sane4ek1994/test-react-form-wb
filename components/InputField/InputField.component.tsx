import React from 'react'
import { IInputField } from './types'

import styles from './inputField.module.scss'

export const InputField: React.FC<IInputField> = props => {
  const { register, type, placeholder, name, error } = props
  return (
    <>
      <label className={styles.label}>
        <input className={styles.input_field} type={type} placeholder={placeholder} {...register(name)} />
        <div className={styles.border}></div>
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </label>
    </>
  )
}
