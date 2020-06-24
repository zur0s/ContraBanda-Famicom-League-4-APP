import React from 'react';
import MenuWindow from "../../UI/MenuWindow/MenuWindow"
import classes from "./MessagePanel.module.css"
import PropTypes from "prop-types"

const MessagePanel = (props) => {

    return (
        <MenuWindow menuType="MessagePanel" handleMenuWindow={props.handleSetup}>
            <form className={classes.MessageForm} onSubmit={props.submit}>
                <input className={classes.MessageInput} type="text"
                    placeholder="Enter message"
                    name="infobar"
                    onMouseDown={e => e.stopPropagation()} />
                <button className={classes.MessageButton} type="submit">Send</button>
            </form>
        </MenuWindow>
    )
}

MessagePanel.propTypes = {
    handleSetup: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,


}

export default MessagePanel;
