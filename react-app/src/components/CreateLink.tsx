import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'

type Inputs = {
    description: string
    url: string
}

const Component = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder='A description for the link'
                type='text'
                {...register('description')}
            />
            <input
                placeholder='The URL for the link'
                type='text'
                {...register('url')}
            />

            <input type='submit' />
        </form>
        )
    }

export default Component

