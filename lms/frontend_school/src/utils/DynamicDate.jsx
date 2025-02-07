export const getFormattedDate = () => {
    const options = {
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric', 
    };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-GB', options);
  };
// Sun 6 Feb 202