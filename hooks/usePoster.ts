import { gql, useQuery } from "@apollo/client"

const posterInvioces = gql`
    query PosterInvoices {
        Invoices {
            invoice {
              full_name
              month
              year
            },
            opening_balance {
              amount
              date
            },
            payment {
              amount
              date
              ref
            },
            power {
              amount
              eaccount
              payable_to_kplc
            }
            rent {
              amount
              agreement_start_date
              factor
              price
            }
            water {
              amount
              consumption
              curr_date
              curr_value
              prev_date
             prev_value
             rate
            }
          }
    }
`


export const usePoster = () => {
    //Set loval state values to handle the festching of the poster data.

    //Fetch the result of the  from the server.
    return useQuery(posterInvioces);
}