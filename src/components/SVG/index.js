const Facebook = ({ color, backgroundColor }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill={color}
  >
    <circle
      id='Ellipse_12'
      data-name='Ellipse 12'
      cx='24'
      cy='24'
      r='24'
      transform='translate(375 4940)'
      fill={backgroundColor}
      opacity='0.1'
    />
    <path
      id='Icon_awesome-facebook-f'
      data-name='Icon awesome-facebook-f'
      d='M13.955,13.875l.685-4.464H10.356v-2.9A2.232,2.232,0,0,1,12.873,4.1h1.947V.3A23.747,23.747,0,0,0,11.364,0C7.836,0,5.531,2.138,5.531,6.009v3.4H1.609v4.464H5.531V24.667h4.826V13.875Z'
      transform='translate(390.391 5555)'
      fill={color}
    />
  </svg>
)

const Facebook_f = ({color})=>{
  <svg xmlns="http://www.w3.org/2000/svg" width="13.211" height="24.667" viewBox="0 0 13.211 24.667">
  <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M13.955,13.875l.685-4.464H10.356v-2.9A2.232,2.232,0,0,1,12.873,4.1h1.947V.3A23.747,23.747,0,0,0,11.364,0C7.836,0,5.531,2.138,5.531,6.009v3.4H1.609v4.464H5.531V24.667h4.826V13.875Z" transform="translate(-1.609)" fill={color}/>
</svg>

}
export {Facebook}