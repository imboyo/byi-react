/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import {
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _DetailPaymentDonationFormButtonGroup from "@/components/page/detail/_DetailPaymentDonationFormButtonGroup";

const schema = yup.object({
  nominal: yup.number().required().min(10000).max(1000000000000000),
});

// Region: COMPONENT
const _DetailPaymentDonationForm = () => {
  // * Button Group Nominal
  const handleClickNominalButton = (newValue: number) => {
    setValue("nominal", newValue);
  };

  // * React Hook Form
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { nominal: number }) => {
    console.log(data.nominal);
  };

  return (
    <>
      {/* Button Group Nominal */}
      <_DetailPaymentDonationFormButtonGroup handleClickItem={handleClickNominalButton} />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        `}
      >
        <Controller
          name="nominal"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              value={field.value || ""}
              onChange={field.onChange}
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


