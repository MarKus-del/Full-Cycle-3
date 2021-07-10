import Head from 'next/head'
import {
  Typography,
  Button,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField,
  Grid,
  Box
} from '@material-ui/core'
import { CreditCard, Product } from '../../../models'
import { GetServerSideProps, NextPage } from 'next'
import { useForm } from "react-hook-form";
import http from '../../../http'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router';
import { useSnackbar } from 'notistack';

interface OrderPageProps {
  product: Product
}

const OrderPage: NextPage<OrderPageProps> = ({ product }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data: CreditCard) => {

    try {
      const { data: order } = await http.post('orders', {
        credit_card: data,
        items: [{ product_id: product.id, quantity: 1 }],
      });
      router.push(`/orders/${order.id}`);
    } catch (e) {
      console.error(axios.isAxiosError(e) ? e.response?.data : e)
      enqueueSnackbar('Erro ao realizar sua compra', {
        variant: 'error'
      })
    }
   

    
  }

  return (
    <div>
      <Head>
        <title>Pagamento</title>
      </Head>

      <Typography
        component="h1"
        variant="h3"
        color="textPrimary"
        gutterBottom
      >
        Checkout
      </Typography>

      <ListItem>
        <ListItemAvatar>
          <Avatar src={product.image_url} />
        </ListItemAvatar>

        <ListItemText
          primary={product.name}
          secondary={`R$ ${product.price}`}
        />
      </ListItem>

      <Typography
        component="h2"
        variant="h6"
        color="textPrimary"
        gutterBottom
      >
        Pague com cartão de crédito
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nome"
              fullWidth
              required
              {...register('name')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField 
              label="Numero do cartão"
              required
              fullWidth
              inputProps={{ maxLength: 16 }}
              {...register('number')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="CVV"
              fullWidth
              type="number"
              required
              {...register('cvv')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField 
                  label="Expiração mês"
                  fullWidth
                  type="number"required
                  {...register('expiration_month')}
                  onChange={e => setValue('expiration_month', parseInt(e.target.value))}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Expiração ano"
                  fullWidth
                  type="number"
                  required
                  {...register('expiration_year')}
                  onChange={e => setValue('expiration_year', parseInt(e.target.value))}
                />
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Box marginTop={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Pagar
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default OrderPage;

export const getServerSideProps: GetServerSideProps<
    OrderPageProps, { slug: string }
  > = async (context) => {
    const { slug } = context.params!;

    try {
      const { data: product } = await http.get(`/products/${slug}`);

      return {
        props: {
          product,
        },
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 404) {
        return { notFound: true };
      }
      throw e;
    }
};
