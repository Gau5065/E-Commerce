import * as yup from 'yup'

export const ProductSchema = yup.object().shape({
    product_name: yup.string().required("Required"),
    product_description: yup.string().required("Required"),
    product_price: yup.number().positive().required("Required"),
    product_discount: yup.number().positive().required("Required").lessThan(yup.ref('product_price'), 'Discount Price must be lower than MRP'),
    product_imgurl: yup.string().required("Required")
})