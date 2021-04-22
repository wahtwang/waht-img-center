import React, { FC, Children } from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route, matchPath
} from 'react-router-dom'
import Login from '#/login/login.tsx'
import AllPhotos from '#/allPhotos/allPhotos.tsx'
import MainTag from '#/mainTag/mainTag.tsx'
interface KeepAliveProps{
    children: JSX.Element;
}
const KeepAlive: FC<KeepAliveProps> = function ({ children }: KeepAliveProps): JSX.Element {
  return (
    <Route render={(): JSX.Element => {
      const result = matchPath(window.location.hash.replace(/^#/, ''), { path: children.props.path })
      return (
        <children.props.component style={{ display: result ? 'block' : 'none' }}></children.props.component>
      )
    }}>
    </Route>
  )
}
const Index: FC = function (): JSX.Element {
  return (
    <HashRouter>
      <Route path="/login"
        component={Login}>
      </Route>
      <KeepAlive>
        <Route path="/home/allPhotos"
          component={AllPhotos}>
        </Route>
      </KeepAlive>
      <Route path="/home/:homeName"
        component={MainTag}>
      </Route>

    </HashRouter>
  )
}
ReactDOM.render(<Index />, document.querySelector('#app'))
