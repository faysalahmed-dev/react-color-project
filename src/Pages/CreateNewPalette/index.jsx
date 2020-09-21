import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import { arrayMove } from 'react-sortable-hoc';
import Form from '../../Component/Form/Form';
import ColorPiker from '../../Component/ColorPiker/ColorPiker';
import ColorBoxList from '../../Component/ColorBoxList/ColorBoxList';

import NavBar from '../../Component/CreactPaletteNavBar/CreactpaletteNavBar';
import Uid from '../../HelperColors/RandomId';
import { checkColorHave, randomNewColor, uuid } from './Helper';
import './CreactNewPalette.scss';
import Styles from './Styles';

const isDrawOpen = document.body.clientWidth >= 900 ? true : false;

class CreateNewPalette extends React.Component {
    static defaultProps = {
        maxColorBoxLength: 20,
    };
    state = {
        open: isDrawOpen,
        name: '',
        curColor: 'purple',
        colorList: [],
    };
    componentDidMount() {
        const totalPalette = 20;
        const colors = [];
        for (let i = 0; i < totalPalette; i++) {
            const newColor = { ...randomNewColor(this.props.paletteList) };
            const findColorIndex = colors.findIndex(
                ({ color }) => color === newColor.color
            );
            if (!checkColorHave(findColorIndex)) {
                newColor.id = Uid();
                colors.push(newColor);
            }
        }
        this.setState({ colorList: colors });
    }
    handleDrawerOpen = () => this.setState({ open: true });

    handleDrawerClose = () => this.setState({ open: false });

    handleChange = (newColor) => this.setState({ curColor: newColor.hex });

    handleAddColor = (name) => {
        this.setState({ name }, () => {
            this.setState({
                colorList: [
                    ...this.state.colorList,
                    { name: name, color: this.state.curColor, id: uuid() },
                ],
            });
        });
    };
    handleRemove = (boxName) => {
        const colorIndex = this.state.colorList.findIndex(
            (color) => color.name === boxName
        );
        if (colorIndex !== -1) {
            const colorList = [...this.state.colorList];
            colorList.splice(colorIndex, 1);
            this.setState({ colorList });
        }
    };
    handleSave = (paletteName) => {
        const palette = {
            paletteName,
            id: paletteName.toLowerCase().replace(/\s/g, '-'),
            deleteAble: true,
            colors: this.state.colorList,
        };
        this.props.handleSave(palette);
        this.props.history.push('/');
    };
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colorList }) => ({
            colorList: arrayMove(colorList, oldIndex, newIndex),
        }));
    };
    clearPalette = () => this.setState({ colorList: [] });

    randomColor = () => {
        const newColor = randomNewColor(this.props.paletteList);
        const findColorIndex = this.state.colorList.findIndex(
            ({ color }) => color === newColor.color
        );
        if (checkColorHave(findColorIndex)) this.randomColor();
        else this.setState({ colorList: [...this.state.colorList, newColor] });
    };
    render() {
        const { paletteList, classes, maxColorBoxLength } = this.props;
        const { open, curColor, colorList } = this.state;
        const isFull = colorList.length >= maxColorBoxLength;
        return (
            <div className={classes.root}>
                <NavBar
                    handleDrawerOpen={this.handleDrawerOpen}
                    colorList={paletteList}
                    open={open}
                    handleSave={this.handleSave}
                />

                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        top: 0,
                        left: 0,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {withStyles.direction === 'ltr' ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </div>
                    <div className='drawer__content'>
                        <div style={{ marginTop: '-10rem' }}>
                            <Typography
                                variant='h4'
                                noWrap
                                align='center'
                                className='drawer__heading'
                            >
                                Create Your Own Palette
                            </Typography>
                            <div className='drawer__button'>
                                <Button
                                    variant='contained'
                                    size='large'
                                    color='secondary'
                                    onClick={this.clearPalette}
                                >
                                    Clear Palette
                                </Button>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={this.randomColor}
                                    disabled={isFull}
                                    size='large'
                                >
                                    Random Color
                                </Button>
                            </div>
                            <ColorPiker
                                color={curColor}
                                handleChange={this.handleChange}
                            />
                            <Form
                                colorList={this.state.colorList}
                                handleSave={this.handleAddColor}
                                dir='color-box'
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
                                    disabled={isFull}
                                    fullWidth
                                    size='large'
                                    style={{ fontSize: '1.2rem' }}
                                >
                                    Add Color
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <ColorBoxList
                        colors={this.state.colorList}
                        removeBox={this.handleRemove}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                    />
                </main>
            </div>
        );
    }
}
export default withRouter(withStyles(Styles)(CreateNewPalette));
