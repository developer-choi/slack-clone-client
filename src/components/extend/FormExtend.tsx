import React, {FormEvent, FormProp, useCallback} from 'react';

export default function FormExtend({onSubmit, ...rest}: FormProp) {

  const _onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  }, [onSubmit]);

  return (
      <form onSubmit={_onSubmit} {...rest}/>
  );
}
