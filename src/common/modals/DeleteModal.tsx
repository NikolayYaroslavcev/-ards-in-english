import {BasicModal} from './BasicModals';
import React from 'react';


export const DeleteModal = () => {
    return (
        <BasicModal>
            <div>
                <h1>Delete Pack</h1>
                <p>Do you really want to remove Pack Name?
                    All cards will be deleted.</p>
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>

            </div>

        </BasicModal>
    )
}
