import {BasicModal} from './BasicModals';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {ButtonCheckbox, ModalCheckbox, ModalHeader, ModalWrapperStyle} from '../components/style/modals/style-modals';


export const AddModal = () => {
    return (
        <BasicModal>
            <ModalWrapperStyle>
                <ModalHeader>
                    <h1>Add new pack</h1>
                    <button>Крэстик</button>
                </ModalHeader>
                <h2>Name pack</h2>
                <input
                    type="text"
                    placeholder={'Сюда нужно будет выводить имя'}
                />
                <ModalCheckbox>
                    <Checkbox defaultChecked/>
                    <p>Private pack</p>
                </ModalCheckbox>
                <ButtonCheckbox>
                    <button className={'cancel'}>Cancel</button>
                    <button className={'save'}>Save</button>
                </ButtonCheckbox>
            </ModalWrapperStyle>
        </BasicModal>
    )
}
