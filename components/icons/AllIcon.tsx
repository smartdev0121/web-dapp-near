import * as React from 'react';

export const AllIcon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>((props, ref) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.80001C6.91899 2.80001 2.80001 6.91899 2.80001 12C2.80001 17.081 6.91899 21.2 12 21.2C17.081 21.2 21.2 17.081 21.2 12C21.2 6.91899 17.081 2.80001 12 2.80001ZM1.20001 12C1.20001 6.03534 6.03534 1.20001 12 1.20001C17.9647 1.20001 22.8 6.03534 22.8 12C22.8 17.9647 17.9647 22.8 12 22.8C6.03534 22.8 1.20001 17.9647 1.20001 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.20001 12C1.20001 11.5582 1.55818 11.2 2.00001 11.2H22C22.4418 11.2 22.8 11.5582 22.8 12C22.8 12.4418 22.4418 12.8 22 12.8H2.00001C1.55818 12.8 1.20001 12.4418 1.20001 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8002 12C8.87064 15.2048 10.0006 18.2872 12 20.7717C13.9994 18.2872 15.1294 15.2048 15.1998 12C15.1294 8.79514 13.9994 5.71276 12 3.22826C10.0006 5.71276 8.87064 8.79514 8.8002 12ZM12 1.99999L11.4093 1.46045C8.77727 4.34198 7.28147 8.08148 7.20019 11.9833C7.19995 11.9944 7.19995 12.0055 7.20019 12.0167C7.28147 15.9185 8.77727 19.658 11.4093 22.5395C11.5609 22.7055 11.7753 22.8 12 22.8C12.2247 22.8 12.4391 22.7055 12.5907 22.5395C15.2228 19.658 16.7186 15.9185 16.7998 12.0167C16.8001 12.0055 16.8001 11.9944 16.7998 11.9833C16.7186 8.08148 15.2228 4.34198 12.5907 1.46045L12 1.99999Z"
        fill="currentColor"
      />
    </svg>
  );
});

AllIcon.displayName = 'AllIcon';