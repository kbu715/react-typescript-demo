type ContainerProps = {
  styles: React.CSSProperties // react version 17 ~
}

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  )
}