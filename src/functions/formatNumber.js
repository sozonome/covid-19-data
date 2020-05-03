const formatNumber = number => {
  return Intl.NumberFormat("en-EN").format(number);
};

export default formatNumber;
