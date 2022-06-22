import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    ViewStyle,
} from 'react-native'

export type Props = TextInputProps & {
    error?: string
    textInputStyle?: ViewStyle
    placeholder?: string
    passwordType?: boolean
}

export const styles = StyleSheet.create({
    base: {
        borderWidth: 1,
        borderRadius: 5,
        height: '5%',
        width: '70%',
        marginBottom: '3%',
        color: 'black',
        padding: 10,
    },
    error: {
        color: 'maroon',
        fontStyle: 'italic',
        opacity: 1,
        marginBottom: 5,
    },
})

export const CusTextField: React.FC<Props> = React.forwardRef<TextInput, Props>(
    (
        {
            error,
            textInputStyle = styles.base,
            placeholder = 'Nothing',
            passwordType = false,
            ...others
        }: Props,
        ref
    ) => {
        return (
            <>
                <TextInput
                    ref={ref}
                    {...others}
                    style={textInputStyle}
                    placeholder={placeholder}
                    secureTextEntry={passwordType}
                />
                {error && <Text style={styles.error}>{error}</Text>}
            </>
        )
    }
)
