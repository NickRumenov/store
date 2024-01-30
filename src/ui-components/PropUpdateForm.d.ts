/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Prop } from "../API.ts";
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
export declare type PropUpdateFormInputValues = {
    key?: string;
    value?: string;
};
export declare type PropUpdateFormValidationValues = {
    key?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PropUpdateFormOverridesProps = {
    PropUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PropUpdateFormProps = React.PropsWithChildren<{
    overrides?: PropUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prop?: Prop;
    onSubmit?: (fields: PropUpdateFormInputValues) => PropUpdateFormInputValues;
    onSuccess?: (fields: PropUpdateFormInputValues) => void;
    onError?: (fields: PropUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PropUpdateFormInputValues) => PropUpdateFormInputValues;
    onValidate?: PropUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PropUpdateForm(props: PropUpdateFormProps): React.ReactElement;
