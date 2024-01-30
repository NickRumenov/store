/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Product } from "../API.ts";
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
export declare type ProductUpdateFormInputValues = {
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
export declare type ProductUpdateFormValidationValues = {
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
export declare type ProductUpdateFormOverridesProps = {
    ProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    product?: Product;
    onSubmit?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onSuccess?: (fields: ProductUpdateFormInputValues) => void;
    onError?: (fields: ProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onValidate?: ProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductUpdateForm(props: ProductUpdateFormProps): React.ReactElement;
