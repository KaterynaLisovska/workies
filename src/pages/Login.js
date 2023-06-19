import { SlCard } from '@shoelace-style/shoelace/dist/react';
import { SlInput } from '@shoelace-style/shoelace/dist/react';
import { SlButton } from '@shoelace-style/shoelace/dist/react';

const LoginPage = () => {
  return(
    <SlCard>
        <SlInput name="email"></SlInput>
        <SlInput name="password"></SlInput>
        <SlButton>Confirm</SlButton>
    </SlCard>
  );
};

export default LoginPage;
