import c from './mainTag.less'
import React, { FC } from 'react'
import { tagConfig } from '@/const.ts'
import { RouteChildrenProps, Link } from 'react-router-dom'
interface Tparam {
  homeName: string;
}
const MainTag: FC<RouteChildrenProps<Tparam>> = function ({ match }: RouteChildrenProps<Tparam>): JSX.Element {
  return (
    <div className={c.mainTag} style={{ height: tagConfig.height + 'vw' }}>
      { tagConfig.tag.map((val, index): JSX.Element => {
        return (
          <Link key={index} to={`/home/${val.path}`}
            className={`${c.tagItem} ${val.path === match?.params.homeName && c.tagItemMatch}`}>
            <svg className={`waht-icon ${c.icon}`} aria-hidden="true">
              <use href={`#icon-${val.icon}`}></use>
            </svg>
            <div className={c.tabName}>{val.name}</div>
          </Link>

        )
      })}
    </div>
  )
}

export default MainTag
