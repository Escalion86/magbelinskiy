// Водолей
const ZodiacLeo = ({ color = 'black', className }) => (
  <svg
    className={className}
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M33.8125 39.6875C33.625 40.4167 33.5312 41.0208 33.5312 41.5C33.5312 42.2292 33.625 42.8229 33.8125 43.2812C34.0625 43.8229 34.3541 44.25 34.6875 44.5625C35.0625 44.9167 35.4791 45.1979 35.9375 45.4062C36.3958 45.6146 37.1041 45.7188 38.0625 45.7188C38.9166 45.7188 39.6666 45.5729 40.3125 45.2812C41.125 44.9271 41.8125 44.4792 42.375 43.9375L45.6875 47.25C44.7708 48.125 43.5625 48.9167 42.0625 49.625C40.9791 50.1458 39.6458 50.4062 38.0625 50.4062C36.4583 50.4062 35.1666 50.1875 34.1875 49.75C33.0625 49.25 32.125 48.625 31.375 47.875C30.5416 47.0417 29.9166 46.1146 29.5 45.0938C29.0833 44.0521 28.875 42.8542 28.875 41.5C28.875 40.0208 29.0937 38.7292 29.5312 37.625C31.1146 33.7292 32.6562 30.7917 34.1562 28.8125C36.0312 26.3333 37.4791 23.6979 38.5 20.9062C38.9583 19.6771 39.1875 18.2813 39.1875 16.7188C39.1875 15.0313 38.9583 13.625 38.5 12.5C38.0625 11.4167 37.375 10.3959 36.4375 9.4375C35.625 8.6042 34.6145 7.9167 33.4062 7.375C32.3854 6.9167 31.1979 6.68754 29.8438 6.6875C28.5521 6.68754 27.3646 6.9167 26.2812 7.375C25.2396 7.81254 24.2291 8.50004 23.25 9.4375C22.3541 10.2917 21.6666 11.3125 21.1875 12.5C20.7291 13.625 20.5 14.823 20.5 16.0938C20.5 17.4479 20.7291 18.6354 21.1875 19.6562C21.75 20.8854 22.5521 22.4271 23.5938 24.2812C24.9896 26.7188 25.6875 29.0313 25.6875 31.2188C25.6875 32.4688 25.4583 33.6563 25 34.7812C24.5625 35.8646 23.875 36.8854 22.9375 37.8438C22.125 38.6771 21.1146 39.3646 19.9062 39.9062C18.8854 40.3646 17.6979 40.5938 16.3438 40.5938C15.0521 40.5938 13.8646 40.3646 12.7812 39.9062C11.7396 39.4688 10.7292 38.7813 9.75 37.8438C8.85416 36.9896 8.16666 35.9688 7.6875 34.7812C7.22916 33.6563 6.99999 32.4688 7 31.2188C6.99999 29.9479 7.22916 28.75 7.6875 27.625C8.12499 26.5417 8.81249 25.5209 9.75 24.5625C10.5625 23.7292 11.5729 23.0417 12.7812 22.5C13.8021 22.0417 14.9896 21.8125 16.3438 21.8125H16.875C16.1666 20.2084 15.8125 18.3125 15.8125 16.125C15.8125 14.1042 16.1562 12.2917 16.8438 10.6875C17.5937 8.93754 18.625 7.40629 19.9375 6.09375C21.25 4.78129 22.7708 3.76046 24.5 3.03125C26.125 2.34379 27.9062 2.00004 29.8438 2C31.8854 2.00004 33.6666 2.34379 35.1875 3.03125C37 3.84379 38.5208 4.86462 39.75 6.09375C41.125 7.46879 42.1562 9.00004 42.8438 10.6875C43.5312 12.375 43.875 14.3959 43.875 16.75C43.875 19.0834 43.5312 21.0729 42.8438 22.7188C41.552 25.8646 39.9583 28.7604 38.0625 31.4062C35.9166 34.4688 34.5 37.2292 33.8125 39.6875ZM18.125 26.8438C17.5833 26.6146 16.9896 26.5 16.3438 26.5C15.6979 26.5 15.1042 26.6146 14.5625 26.8438C14 27.0938 13.4896 27.4375 13.0312 27.875C12.5729 28.3542 12.2292 28.8646 12 29.4062C11.7708 29.9688 11.6562 30.5729 11.6562 31.2188C11.6562 31.8438 11.7708 32.4375 12 33C12.2292 33.5417 12.5729 34.0521 13.0312 34.5312C13.4896 34.9688 14 35.3125 14.5625 35.5625C15.1042 35.7917 15.6979 35.9063 16.3438 35.9062C16.9896 35.9063 17.5833 35.7917 18.125 35.5625C18.6875 35.3125 19.1979 34.9688 19.6562 34.5312C20.1146 34.0521 20.4583 33.5417 20.6875 33C20.9166 32.4375 21.0312 31.8438 21.0312 31.2188C21.0312 30.5729 20.9166 29.9688 20.6875 29.4062C20.4583 28.8646 20.1146 28.3542 19.6562 27.875C19.1979 27.4375 18.6875 27.0938 18.125 26.8438Z" />
  </svg>
)

export default ZodiacLeo