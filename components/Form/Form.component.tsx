import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppSelector } from '../../redux/hooks'
import { yupResolver } from '@hookform/resolvers/yup'
import { requestApi } from '../../api'
import { InputField, Button } from '..'

import styles from './index.module.scss'

const inputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Name'
  },
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Phone'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'E-mail'
  }
]

export const Form: React.FC = () => {
  const { error } = useAppSelector(state => state.form)

  const validatonSchema = yup.object({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    name: yup.string().min(2).required()
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validatonSchema) })

  const onSubmitHandler = (data: any) => {
    requestApi('/feedback', data, 'POST').then(({ data }) => {
      console.log('Done')
      alert('Item has been created')
      reset()
    })
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <h1 className={styles.title}>Contact us</h1>
      <p>Do you have any kind of help please contact with us.</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        {inputs.map((item, key) => (
          <InputField {...item} error={errors[item.name]?.message} register={register} key={key} />
        ))}
        <Button text='Send' />
        <span style={{ color: 'red' }}>{error}</span>
      </form>
    </>
  )
}
