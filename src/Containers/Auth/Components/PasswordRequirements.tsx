import React from "react";
import Box from "../../../Components/Box";
import styled from "styled-components";
import {FormikValues} from "formik";

const ListComponent = styled.ul`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;

  li {
    display: flex;
    align-items: center;
    font-size: 0.8em;
    padding-bottom: 0.4em;
  }
`

interface CircleProps {
    isCorrect?: boolean;
}

const Circle = styled.span<CircleProps>`
  display: block;
  width: 0.5em;
  height: 0.5em;
  background: ${props => props.isCorrect ? props.theme.colors.green : props.theme.colors.red};
  margin-right: 0.3em;
  border-radius: 100%;
`

interface PasswordRequirementsProps {
    formikValues: FormikValues;
}

export const PasswordRequirements = React.memo(({formikValues}: PasswordRequirementsProps) => {
    const {password} = formikValues;

    return <Box bgColor="white-100" p="10px 10px" bR="4px">
        <p>Password must have:</p>
        <ListComponent>
            <li><Circle isCorrect={password?.length >= 8}/> Min 8 characters</li>
            <li><Circle isCorrect={/[a-z]/.test(password)}/>1 lower case letter at least</li>
            <li><Circle isCorrect={/[A-Z]/.test(password)}/>1 upper case letter at least</li>
            <li><Circle isCorrect={/[0-9]/.test(password)}/>1 number at least</li>
            <li><Circle isCorrect={/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)}/>1 special at least</li>
        </ListComponent>
    </Box>
});