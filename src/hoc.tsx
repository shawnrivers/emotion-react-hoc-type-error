const Component: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export const hoc = <P extends Record<string, unknown>>(C: React.FC<P>) => {
  return (props: P) => {
    return <C {...props} />;
  };
};

hoc(Component);
