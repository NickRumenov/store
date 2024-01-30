/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProductCreateFormInputValues = {
    name?: string;
    status?: string;
    isPromo?: boolean;
    description?: string;
    price?: number;
    currency?: string;
    img?: string;
    imgAlt?: string;
    thumbnailImg?: string;
    brand?: string;
    category?: string;
    categoryId?: string;
    subCategory?: string;
    subCategoryId?: string;
};
export declare type ProductCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    isPromo?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    currency?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    imgAlt?: ValidationFunction<string>;
    thumbnailImg?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    categoryId?: ValidationFunction<string>;
    subCategory?: ValidationFunction<string>;
    subCategoryId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    isPromo?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    currency?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
    imgAlt?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnailImg?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    categoryId?: PrimitiveOverrideProps<TextFieldProps>;
    subCategory?: PrimitiveOverrideProps<TextFieldProps>;
    subCategoryId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
