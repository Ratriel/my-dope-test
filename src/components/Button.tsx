import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

export interface IButton {
  variant?: string
  lable: string
  onClick?: () => void
  disabled?: boolean
}

const colors = {
  //buttons
  $ctaHoverButton: '#a70303',
  $ctaPressedButton: '#650808',
  $lightPink: '#ebebeb',
  $brownGrey: '#a4a4a4',
  $ghostButtonColor: '#d52929',
  $rustyRed: '#c81414',
  $ghostHoverText: 'rgba(200, 20, 20, 0.1)',
  $brownishGrey: '#5f5f5f',
  $white: '#ffffff',
  $azure: '#00aeef',
  $azure2: 'rgba(0, 174, 239, 0.2)',
  $azureCheckBoxHover: '#0091c7',
  $warning: '#f07820',
  $black: '#232323',
  $purplishGrey: '#525152',
  $inputBackGround: '#f7f7f7',

  //chips
  $purplishgrey: '#525152',
  $boxShadow: '0,0,0',

  //dropdowns
  $dropDownFontColor: '#4c4b46',

  //Peer section
  $successMessage: '#d8e4cc',
  $infoMessage: '#ccd3f5',
  $warningMessage: '#fbeece',
  $dangerMessage: '#e6bab9',

  // Stepper Hover
  $stepperHoverBox: 'rgba(35, 35, 35, 0.2)'
}

const useStyles = makeStyles({
  button: {
    margin: '10px',
    padding: '10px 20px 10px 20px',
    borderRadius: '5px',
    fontfamily: 'Lato',
    fontweight: 'bold',
    color: colors.$white,
    backgroundColor: colors.$rustyRed,
    '&:hover': {
      backgroundColor: colors.$ctaHoverButton
    },
    '&:active': { backgroundColor: colors.$ctaPressedButton },
    '&:disabled': {
      color: colors.$brownGrey,
      backgroundColor: colors.$lightPink
    }
  },
  ghost: {
    margin: '10xp',
    padding: '10px 20px 10px 20px',
    borderRadius: '5px',
    color: colors.$rustyRed,
    fontfamily: 'Lato',
    fontweight: 'bold',
    backgroundColor: colors.$white,
    border: `solid 1px ${colors.$ghostButtonColor}`,
    '&:hover': {
      backgroundColor: colors.$ghostHoverText,
      color: colors.$ctaHoverButton,
      borderColor: colors.$ctaHoverButton
    },
    '&:active': {
      backgroundColor: colors.$white,
      color: colors.$ctaPressedButton,
      borderColor: colors.$ctaPressedButton
    },
    '&:disabled': {
      color: colors.$brownGrey,
      backgroundColor: colors.$lightPink
    }
  }
})

const NormalButton = (props: IButton) => {
  const classes = useStyles()
  const { variant, lable, disabled, onClick, ...rest } = props
  if (variant === 'ghost') {
    return (
      <Button
        className={classes.ghost}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {lable}
      </Button>
    )
  } else {
    return (
      <Button
        className={classes.button}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {lable}
      </Button>
    )
  }
}

export default NormalButton
