import c from './input.less'
import React, { FC, ChangeEvent, ComponentProps } from 'react'
interface Props extends ComponentProps<'input'>{
  onChange(event: ChangeEvent): void;
  children?: JSX.Element;
}

const Input: FC<Props> = function (props: Props): JSX.Element {
  const { children, ...nativeProps } = props
  return (
    <div className={c.input}>
      <div className={c.iconBox}>
        {children}
      </div>
      <input type="text" {...nativeProps} />
    </div>
  )
}
export default Input
