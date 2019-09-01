import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from '../Form/Form';
import { withStyles } from '@material-ui/styles';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const styles = {
	button: {
		fontSize: '1.1rem',
		"&:not(:last-child)": {
			marginRight: '1rem'
		}
	},
	content: {
		fontSize: '1.6rem'
	}
};

class FormDialog extends React.Component {
	state = {
		open: false,
		emojiShow: false,
		emoji: ''
	};
	handleClickOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	handleEmojiClose=() => {
		this.setState({ emojiShow: false });
	}
	handleEmojiSelect = () => {
		this.setState({ emojiShow: true})
	}
	addEmoji = (emoji) => {
		this.setState({emoji:emoji.native}, () => {
			this.setState({ emojiShow: false })
		})
	}
	render() {
		const { open, emoji, emojiShow } = this.state;
		const { colorList, handleSave, classes } = this.props;
		return (
			<div>
				<Button variant="contained" color="primary" onClick={this.handleClickOpen}>
					Save
				</Button>
				<Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title" className={classes.title}>
						Choose Palette Name
					</DialogTitle>
					<DialogContent>
						<DialogContentText className={classes.content}>
							Choose Palette Name for Your New Palette.Make Sure It Should Be Unique!
						</DialogContentText>
						
						<Form colorList={colorList} 
							handleSave={handleSave} 
							type="app" 
							rule="Save"
							emoji={emoji}
						>
							<DialogActions style={{display:'flex',justifyContent: 'space-between'}}>
								<Button variant="contained" color="primary" className={classes.button} onClick={this.handleEmojiSelect}>
									Emoji
								</Button>
								<div>
									<Button
										onClick={this.handleClose}
										color="secondary"
										variant="contained"
										className={classes.button}
									>
										Cancel
									</Button>
									<Button variant="contained" color="primary" type="submit" className={classes.button}>
										Save
									</Button>
								</div>
							</DialogActions>
						</Form>
					</DialogContent>
					<Dialog open={emojiShow} onClose={this.handleEmojiClose} >
						<Picker onSelect={this.addEmoji}/>
					</Dialog>
				</Dialog>
			</div>
		);
	}
}
export default withStyles(styles)(FormDialog);
