type ContainerProps = {
  styles: React.CSSProperties // react version 17 ~
}

export const Container = ({styles}: ContainerProps) => {
  return (
    <div style={styles}>
      Text content goes here
    </div>
  )
}