import React from 'react'

export default function Lista(props) {
  return (
    <div class="container-lista">
      <p>{props.info}</p>
      <ul class="lista">
        <li>{props.info1}</li>
        <li>{props.info2}</li>
        <li>{props.info3}</li>
        <li>{props.info4}</li>
        <li>{props.info5}</li>
        <li>{props.info6}</li>
      </ul>
    </div>
  )
}
