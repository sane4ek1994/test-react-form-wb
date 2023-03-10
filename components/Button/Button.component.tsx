import React, { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { IButton } from './types'

import styles from './button.module.scss'

const Button: FC<IButton> = props => {
  const { text } = props
  const isloading = useAppSelector(({ form }) => form.isLoading)

  return (
    <button className={styles.submit} type='submit' disabled={isloading}>
      {text}
    </button>
  )
}

export default Button
