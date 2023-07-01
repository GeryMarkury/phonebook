import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const nameForm = definePartsStyle({
    field: {
        width: '400px',
        marginBottom: '20px',
    background: 'cyan',
        border: '3px ridge',
        borderColor: 'vanilla',
        color: 'white',
        _focusVisible: {
            border: '3px ridge',
            borderColor: 'orange',
        }
  },
})

export const inputTheme = defineMultiStyleConfig({ variants: {nameForm}, });