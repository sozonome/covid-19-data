export const formatNumber = (number: number) => {
  return Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(
    number
  );
};
