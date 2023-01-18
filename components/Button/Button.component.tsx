import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import styles from './index.module.scss'

interface Props {
  text: string
}

export const Button: React.FC<Props> = ({ text }) => {
  const isloading = useAppSelector(state => state.form.isLoading)
  return (
    <>
      <button disabled={isloading} className={styles.submit}>
        {text}
      </button>
    </>
  )
}
