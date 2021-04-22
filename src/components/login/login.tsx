import c from './login.less'
import React, { useState, FC, ChangeEvent } from 'react'
import Input from '#/common/input/input'
import fetch from 'lib/fetch'
const Login: FC = function (): JSX.Element {
  const [touchClassName, setTouchClassName] = useState('')
  const [animateClassName, setAnimateClassName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setpassword] = useState('')
  return (
    <div className={c.login}>
      <div className={c.container}>
        <div className={c.title}>Login</div>
        <div className={c.loginContainer}>
          <div className={c.username}>
            <Input value={username} placeholder="username"
              onChange={(event: ChangeEvent): void => { setUsername((event.target as HTMLInputElement).value) }} >
              <svg className={`waht-icon ${c.icon}`} aria-hidden="true">
                <use href="#icon-yonghuming"></use>
              </svg>
            </Input>
          </div>
          <div className={c.password}>
            <Input type="password" value={password}
              placeholder="password"
              onChange={(event: ChangeEvent): void => { setpassword((event.target as HTMLInputElement).value) }} >
              <svg className={`waht-icon ${c.icon}`} aria-hidden="true">
                <use href="#icon-mima"></use>
              </svg>
            </Input>
          </div>
        </div>
        <div className={c.logoSubmit} >
          <div className={`${c.jumpLogoBox} ${touchClassName}`} onTouchStart={(): void => { setTouchClassName(c.logoSubmitTouchStart) }}
            onTouchEnd={(): void => {
              setTouchClassName('')
            }}
            onClick={(): void => {
              fetch('/api/user/login', 'POST', { body: { username, password } })
              setAnimateClassName(c.logoItemRequest)
            }}>
            {(new Array(10)).fill('').map((val, index): JSX.Element => {
              return (
                <div key={index} className={`${c[`logoItem${index}`]} ${animateClassName}`}></div>
              )
            })}
          </div>
        </div>
        <div className={c.type}>WAHT IMG</div>
      </div>
    </div>
  )
}
export default Login
