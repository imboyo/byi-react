/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import {
  Button,
  InputAdornment,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { numToCurrencyFormat } from "@/utils/numToCurrencyFormat";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

const schema = yup.object({
  nominal: yup.number().required().min(10000).max(1000000000000000),
});

// Region: COMPONENT
const _DetailPaymentDonationForm = () => {
  const theme = useTheme();

  // Need to make this state because the getValues() from react-hook-form is not reactive. we need to make it reactive to re render the component when the value is changed to update the UI.
  // For example in group button nominal. The Button Group have active state, so we need to update the UI when the value is changed.
  const [inputNominal, setInputNominal] = useState<number>(0);

  // * Button Group Nominal
  const buttonGroup = [10000, 50000, 100000, 200000];
  const handleClickNominalButton = (newValue: number) => {
    setValue("nominal", newValue);
    setInputNominal(newValue);
  };

  // * React Hook Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onNominalInputChange = async (value: number) => {
    setValue("nominal", value);
  };

  const onSubmit = (data: { nominal: number }) => {
    console.log(data.nominal);
  };

  return (
    <>
      {/* Button Group Nominal */}
      <div css={styles.container}>
        {buttonGroup.map((_value, _index) => (
          <Button
            key={_index}
            fullWidth
            variant="outlined"
            onClick={() => handleClickNominalButton(_value)}
            css={styles.buttonNominal(theme, _value, inputNominal)}
          >
            {numToCurrencyFormat(_value)}
          </Button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        <Controller
          name="nominal"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value || ""}
              onChange={() => onNominalInputChange(field.value)}
              error={!!errors.nominal}
              helperText={errors.nominal?.message || null}
              label={"Jumlah Donasi"}
              fullWidth
              type="number"
              inputMode="numeric"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              }}
            />
          )}
        />
        <Button fullWidth variant="contained" type="submit">
          Donasi Sekarang
        </Button>
      </form>
    </>
  );
};
export default _DetailPaymentDonationForm;

// Region: Styles
const styles = {
  container: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
  `,

  buttonNominal: (theme: Theme, buttonValue: number, stateValue: number) => css`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    padding: 1rem 0;
    color: ${grey[800]} !important;

    // active state
    border: ${stateValue === buttonValue
      ? `1px solid ${theme.palette.primary.main}`
      : `1px solid ${grey[400]}`} !important;
  `,
};
