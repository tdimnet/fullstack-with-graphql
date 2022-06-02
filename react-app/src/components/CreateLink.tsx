import { useForm, SubmitHandler } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    description: string
    url: string
}

const CREATE_LINK_MUTATION = gql`
    mutation PostMutation(
        $description: String!
        $url: String!
    ) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

const Component = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const [ createLink, { data, loading, error } ] = useMutation(CREATE_LINK_MUTATION)

    const onSubmit: SubmitHandler<Inputs> = data => createLink({ variables: {
        description: data.description,
        url: data.url
    }, onCompleted: () => console.log("Done!")})

    console.log("========")
    console.log(data)
    console.log("========")
    console.log(loading)
    console.log("========")
    console.log(error)
    console.log("========")

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

