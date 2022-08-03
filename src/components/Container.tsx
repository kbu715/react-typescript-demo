type ContainerProps = {
  children: React.ReactNode
  styles: React.CSSProperties // react version 17 ~
}

export const Container = ({ children, styles }: ContainerProps) => {
  return <div style={styles}>{children}</div>
}
