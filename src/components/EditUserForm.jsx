import React from 'react';
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser)

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        //console.log(data);

        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)

        //Limpiar Campos
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo requerido'
                        }
                    })
                }
            />
            <div>
            {errors?.name?.message}
            </div>
            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo requerido'
                        }
                    })
                }
            />
            <div>
            {errors?.username?.message}
            </div>
            <button>Editar usuario</button>
        </form>

    );
}

export default EditUserForm;