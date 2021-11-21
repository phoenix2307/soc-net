import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}
const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
                {/*                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>*/}
                {/*                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Valera</NavLink>
                </div>*/}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How is your IT-Kamasutra
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>

    )
}

export default Dialogs