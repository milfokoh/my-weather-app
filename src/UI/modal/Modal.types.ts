import type { PropsWithChildren } from 'react';

export type TModalProp = PropsWithChildren<{
  open: boolean;
  onCancel: () => void;
  title: string;
}>;
