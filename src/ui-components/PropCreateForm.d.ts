/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PropCreateFormInputValues = {
    key?: string;
    value?: string;
};
export declare type PropCreateFormValidationValues = {
    key?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropCreateFormOverridesProps = {
    PropCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropCreateFormProps = React.PropsWithChildren<{
    overrides?: PropCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PropCreateFormInputValues) => PropCreateFormInputValues;
    onSuccess?: (fields: PropCreateFormInputValues) => void;
    onError?: (fields: PropCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropCreateFormInputValues) => PropCreateFormInputValues;
    onValidate?: PropCreateFormValidationValues;
} & React.CSSProperties>;
export default function PropCreateForm(props: PropCreateFormProps): React.ReactElement;
