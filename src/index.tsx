import * as React from 'react'
import NormalButton from './components/Button'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  const [count, setCount] = React.useState<number>(0)
  return (
    <div>
      <div className={styles.test}>Example Component: {text}</div>

      <div>Testing State {count} </div>
      <button style={{ margin: '20px' }} onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <NormalButton lable={'test'} />
    </div>
  )
}
