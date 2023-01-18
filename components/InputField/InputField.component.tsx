import { spawn } from 'child_process'
import React from 'react'
import styles from './index.module.scss'

interface Props {
  register: any
  type: string
  placeholder: string
  name: string
  error: any
}

export const InputField: React.FC<Props> = ({ register, type, placeholder, name, error }) => {
  return (
    <>
      <input type={type} className={styles.input_field} placeholder={placeholder} {...register(name)} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )
}