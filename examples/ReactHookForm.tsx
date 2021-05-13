import React, { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ColumnSelect from '../src'
import type { OptionType } from '../src/types'
import { chessOptions } from './data/options'

type FormData = {
  username: string
  favorites: string[]
}

const ReactHookForm: FC = () => {
  const { register, control, setValue, handleSubmit } = useForm()

  const onSubmit = (data: FormData) => {
    console.info('Form Submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />
      <Controller
        name='favorites'
        control={control}
        defaultValue={[]}
        render={() => (
          <ColumnSelect
            options={chessOptions}
            onChange={(e) =>
              setValue(
                'favorites',
                e.map((i: OptionType) => i.value)
              )
            }
          />
        )}
      />
      <input type='submit' />
    </form>
  )
}

export default ReactHookForm
