import c from './allPhotos.less'
import React, { FC, useState, useRef } from 'react'
import { tagConfig } from '@/const'
import { onceFunction } from 'lib/tool'
interface ResetScroll {
  (allPhotos: React.RefObject<HTMLDivElement>): void;
}
interface Props {
  style?: StyleSheetList;
}
const resetScroll = (allPhotos: React.RefObject<HTMLDivElement>, pcitureNumber: number): void => {
  requestAnimationFrame((): void => {
    allPhotos.current && allPhotos.current.scrollBy({ top: pcitureNumber * 75 })
  })
}
const onceScroll = onceFunction<[React.RefObject<HTMLDivElement>, number], void>(resetScroll)

const AllPhotos: FC<Props> = function (props: Props): JSX.Element {
  const allPhotos = useRef<HTMLDivElement>(null)
  const [pcitureNumber, setPictuerNumber] = useState(1000)
  onceScroll(allPhotos, pcitureNumber)
  return (
    <div {...props} className={c.allPhotos}
      ref={allPhotos}>
      <div className={c.header}>
        <div className={c.imgState}>
          <div className={c.imgDate}>2020年4月17日至19日</div>
          <div className={c.position}>杭州市-萧山区</div>
        </div>
        <div className={c.palette}>选择</div>
      </div>
      <div className={c.container} onClick={(): void => {
        setPictuerNumber(pcitureNumber)
      }}>
        <div className={c.imgBox}>
          {(new Array(pcitureNumber)).fill('').map((val, index): JSX.Element => {
            return (<div className={c.img} key={index}>{pcitureNumber - index}</div>)
          })}
        </div>
        <div className={c.describe} style={{ marginBottom: tagConfig.height + 'vw' }}>描述描述描述</div>
      </div>
    </div>
  )
}
export default AllPhotos
