import React, { Component } from "react";
import { Grid, MenuItem, Select } from "@material-ui/core";
import styles from "./index.module.css";
import {
  StyledTypography,
  StyledTextField,
  StyledDarkButton,
  StyledFormControl
} from "./styledComponents";
import { connect } from "react-redux";
import {
  showBackdrop,
  updateAddress,
  updateCity,
  updateDistrict,
  updateEmail,
  updateFullname,
  updateNote,
  updatePhone
} from "../../actions";

class customerOrderInfo extends Component {
  render() {
    const {
      showBackdrop,
      customer,
      updateAddress,
      updateCity,
      updateDistrict,
      updateEmail,
      updateFullname,
      updateNote,
      updatePhone
    } = this.props;
    return (
      <div>
        <Grid container spacing={2} className={styles.summary}>
          <Grid item>
            <StyledTypography
              className={styles.detail__title}
              variant="body1"
              color="inherit"
              align="left"
            >
              Thông tin người mua/nhận hàng
            </StyledTypography>
          </Grid>
          <Grid item md={12} xs={12}>
            <StyledTextField
              onChange={e => {
                updateFullname(e.target.value);
              }}
              fullWidth
              value={customer.fullname}
              label="Họ và tên"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <StyledTextField
              onChange={e => {
                updateEmail(e.target.value);
              }}
              fullWidth
              label="Email"
              variant="outlined"
              value={customer.email}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <StyledTextField
              onChange={e => {
                updatePhone(e.target.value);
              }}
              fullWidth
              label="Số điện thoại"
              variant="outlined"
              value={customer.phone}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledFormControl variant={"outlined"} fullWidth>
              <Select
                value={customer.city || "default"}
                onChange={e => updateCity(e.target.value)}
              >
                <MenuItem value="default" disabled>
                  --Thành phố--
                </MenuItem>
                <MenuItem value={"Tp.Hồ Chí Minh"}>Tp.Hồ Chí Minh</MenuItem>
                <MenuItem value={"Nha Trang"}>Nha Trang</MenuItem>
                <MenuItem value={"Đà Nẵng"}>Đà Nẵng</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledFormControl variant={"outlined"} fullWidth>
              <Select
                value={customer.district || "default"}
                onChange={e => updateDistrict(e.target.value)}
              >
                <MenuItem value="default" disabled>
                  --Quận/Huyện--
                </MenuItem>
                <MenuItem value={"Tân Bình"}>Tân Bình</MenuItem>
                <MenuItem value={"Quận 10"}>Quận 10</MenuItem>
                <MenuItem value={"Tân Phú"}>Tân Phú</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <StyledTextField
              onChange={e => {
                updateAddress(e.target.value);
              }}
              fullWidth
              label="Địa chỉ giao hàng"
              variant="outlined"
              value={customer.address}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <StyledTextField
              onChange={e => {
                updateNote(e.target.value);
              }}
              multiline
              rows={4}
              fullWidth
              label="Ghi chú"
              variant="outlined"
              value={customer.note}
            />
          </Grid>
          <Grid item container md={12} xs={12} justify={"space-between"}>
            <Grid item>
              <StyledTypography>Tiền ship:</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography>200,000 đ</StyledTypography>
            </Grid>
          </Grid>
          <Grid item container md={12} xs={12} justify={"space-between"}>
            <Grid item>
              <StyledTypography>Tổng cộng:</StyledTypography>
            </Grid>
            <Grid item>
              <StyledTypography>200,000 đ</StyledTypography>
            </Grid>
          </Grid>
          <Grid item container>
            <StyledDarkButton
              onClick={() => {
                showBackdrop();
              }}
              variant="outlined"
              fullWidth
            >
              Xác nhận đặt hàng
            </StyledDarkButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.Customer
});

const mapDispatchToProps = dispatch => ({
  showBackdrop: () => dispatch(showBackdrop()),
  updateAddress: data => dispatch(updateAddress(data)),
  updateCity: data => dispatch(updateCity(data)),
  updateDistrict: data => dispatch(updateDistrict(data)),
  updateEmail: data => dispatch(updateEmail(data)),
  updateFullname: data => dispatch(updateFullname(data)),
  updateNote: data => dispatch(updateNote(data)),
  updatePhone: data => dispatch(updatePhone(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(customerOrderInfo);
