export const options = [
   { value: 'telaviv', label: 'Tel-Aviv' },
   { value: 'haifa', label: 'Haifa' },
   { value: 'hadera', label: 'Hadera' }
 ]
 export const colourStyles = {
  control: (styles:any ) => ({
     ...styles,
     backgroundColor: 'rgba(71,147,255, 0.2)',
     width: '194px',
     height: '37px',
     border: 'none',
     borderRadius: '10px',
     zIndex: 100
  })
}