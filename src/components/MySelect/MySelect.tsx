import React, { FC } from 'react'

interface MySelectProps {
  name: any
  disabled: boolean
  selected: boolean
  className: string
}

const MySelect: FC<MySelectProps> = ({
  name,
  disabled,
  selected,
  className,
}) => {
  return (
    <select className={className} name={name}>
      <option disabled={disabled} selected={selected}>
        {name}
      </option>
    </select>
  )
}

export default MySelect
