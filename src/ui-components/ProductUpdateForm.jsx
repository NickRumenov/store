/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProduct } from "../graphql/queries";
import { updateProduct } from "../graphql/mutations";
const client = generateClient();
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    status: "",
    isPromo: false,
    description: "",
    price: "",
    currency: "",
    img: "",
    imgAlt: "",
    thumbnailImg: "",
    brand: "",
    category: "",
    categoryId: "",
    subCategory: "",
    subCategoryId: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [status, setStatus] = React.useState(initialValues.status);
  const [isPromo, setIsPromo] = React.useState(initialValues.isPromo);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [img, setImg] = React.useState(initialValues.img);
  const [imgAlt, setImgAlt] = React.useState(initialValues.imgAlt);
  const [thumbnailImg, setThumbnailImg] = React.useState(
    initialValues.thumbnailImg
  );
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [category, setCategory] = React.useState(initialValues.category);
  const [categoryId, setCategoryId] = React.useState(initialValues.categoryId);
  const [subCategory, setSubCategory] = React.useState(
    initialValues.subCategory
  );
  const [subCategoryId, setSubCategoryId] = React.useState(
    initialValues.subCategoryId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setName(cleanValues.name);
    setStatus(cleanValues.status);
    setIsPromo(cleanValues.isPromo);
    setDescription(cleanValues.description);
    setPrice(cleanValues.price);
    setCurrency(cleanValues.currency);
    setImg(cleanValues.img);
    setImgAlt(cleanValues.imgAlt);
    setThumbnailImg(cleanValues.thumbnailImg);
    setBrand(cleanValues.brand);
    setCategory(cleanValues.category);
    setCategoryId(cleanValues.categoryId);
    setSubCategory(cleanValues.subCategory);
    setSubCategoryId(cleanValues.subCategoryId);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProduct.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProduct
        : productModelProp;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [{ type: "Required" }],
    status: [{ type: "Required" }],
    isPromo: [{ type: "Required" }],
    description: [{ type: "Required" }],
    price: [{ type: "Required" }],
    currency: [{ type: "Required" }],
    img: [{ type: "Required" }],
    imgAlt: [],
    thumbnailImg: [],
    brand: [{ type: "Required" }],
    category: [{ type: "Required" }],
    categoryId: [{ type: "Required" }],
    subCategory: [],
    subCategoryId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          status,
          isPromo,
          description,
          price,
          currency,
          img,
          imgAlt: imgAlt ?? null,
          thumbnailImg: thumbnailImg ?? null,
          brand,
          category,
          categoryId,
          subCategory: subCategory ?? null,
          subCategoryId: subCategoryId ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                id: productRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={true}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status: value,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <SwitchField
        label="Is promo"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPromo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo: value,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.isPromo ?? value;
          }
          if (errors.isPromo?.hasError) {
            runValidationTasks("isPromo", value);
          }
          setIsPromo(value);
        }}
        onBlur={() => runValidationTasks("isPromo", isPromo)}
        errorMessage={errors.isPromo?.errorMessage}
        hasError={errors.isPromo?.hasError}
        {...getOverrideProps(overrides, "isPromo")}
      ></SwitchField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description: value,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price: value,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Currency"
        isRequired={true}
        isReadOnly={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency: value,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      ></TextField>
      <TextField
        label="Img"
        isRequired={true}
        isReadOnly={false}
        value={img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img: value,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.img ?? value;
          }
          if (errors.img?.hasError) {
            runValidationTasks("img", value);
          }
          setImg(value);
        }}
        onBlur={() => runValidationTasks("img", img)}
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        {...getOverrideProps(overrides, "img")}
      ></TextField>
      <TextField
        label="Img alt"
        isRequired={false}
        isReadOnly={false}
        value={imgAlt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt: value,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.imgAlt ?? value;
          }
          if (errors.imgAlt?.hasError) {
            runValidationTasks("imgAlt", value);
          }
          setImgAlt(value);
        }}
        onBlur={() => runValidationTasks("imgAlt", imgAlt)}
        errorMessage={errors.imgAlt?.errorMessage}
        hasError={errors.imgAlt?.hasError}
        {...getOverrideProps(overrides, "imgAlt")}
      ></TextField>
      <TextField
        label="Thumbnail img"
        isRequired={false}
        isReadOnly={false}
        value={thumbnailImg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg: value,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.thumbnailImg ?? value;
          }
          if (errors.thumbnailImg?.hasError) {
            runValidationTasks("thumbnailImg", value);
          }
          setThumbnailImg(value);
        }}
        onBlur={() => runValidationTasks("thumbnailImg", thumbnailImg)}
        errorMessage={errors.thumbnailImg?.errorMessage}
        hasError={errors.thumbnailImg?.hasError}
        {...getOverrideProps(overrides, "thumbnailImg")}
      ></TextField>
      <TextField
        label="Brand"
        isRequired={true}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand: value,
              category,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={true}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category: value,
              categoryId,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Category id"
        isRequired={true}
        isReadOnly={false}
        value={categoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId: value,
              subCategory,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.categoryId ?? value;
          }
          if (errors.categoryId?.hasError) {
            runValidationTasks("categoryId", value);
          }
          setCategoryId(value);
        }}
        onBlur={() => runValidationTasks("categoryId", categoryId)}
        errorMessage={errors.categoryId?.errorMessage}
        hasError={errors.categoryId?.hasError}
        {...getOverrideProps(overrides, "categoryId")}
      ></TextField>
      <TextField
        label="Sub category"
        isRequired={false}
        isReadOnly={false}
        value={subCategory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory: value,
              subCategoryId,
            };
            const result = onChange(modelFields);
            value = result?.subCategory ?? value;
          }
          if (errors.subCategory?.hasError) {
            runValidationTasks("subCategory", value);
          }
          setSubCategory(value);
        }}
        onBlur={() => runValidationTasks("subCategory", subCategory)}
        errorMessage={errors.subCategory?.errorMessage}
        hasError={errors.subCategory?.hasError}
        {...getOverrideProps(overrides, "subCategory")}
      ></TextField>
      <TextField
        label="Sub category id"
        isRequired={false}
        isReadOnly={false}
        value={subCategoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              isPromo,
              description,
              price,
              currency,
              img,
              imgAlt,
              thumbnailImg,
              brand,
              category,
              categoryId,
              subCategory,
              subCategoryId: value,
            };
            const result = onChange(modelFields);
            value = result?.subCategoryId ?? value;
          }
          if (errors.subCategoryId?.hasError) {
            runValidationTasks("subCategoryId", value);
          }
          setSubCategoryId(value);
        }}
        onBlur={() => runValidationTasks("subCategoryId", subCategoryId)}
        errorMessage={errors.subCategoryId?.errorMessage}
        hasError={errors.subCategoryId?.hasError}
        {...getOverrideProps(overrides, "subCategoryId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || productModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
