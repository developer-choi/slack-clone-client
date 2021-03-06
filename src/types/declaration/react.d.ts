import 'react';
import {ComponentProps} from 'react';

declare module 'react' {
  export type DivProp = Omit<ComponentProps<'div'>, 'ref'>
  export type FormProp = Omit<ComponentProps<'form'>, 'ref'>
}
