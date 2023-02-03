import { UseFormReturn } from 'react-hook-form/dist/types/form'

export interface IInputField {
  register: UseFormReturn['register']
  type: string
  placeholder: string
  name: string
  error: any
}
