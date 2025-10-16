export type TCityModalProp = {
  open: boolean;
  onCancel: () => void;
  onSelectCity: (coords: { lat: number; lon: number }) => void;
};
