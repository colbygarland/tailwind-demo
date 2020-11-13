export default function Content(props) {
  const alignment = props.align ? props.align : '';
  const classes = `py-6 md:py-10 lg:py-16 border ${alignment}`
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}