import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  console.log(props);
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
