import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { GET_CARD } from '../../../../services/queries'
import { SET_CARD_FIELD } from '../../../../services/mutations'

const FieldWrapper = ({children}) => (
  <Query query={GET_CARD}>
    {({ data: { card }, client }) => {
      if(!card) return null
      console.log("card query", card)
      return (
      <Mutation mutation={SET_CARD_FIELD}>
        {setCardField => console.log("card mutation") || React.Children.map(children, child =>
          React.cloneElement(child, { setCardField, card })
        )}
      </Mutation>
    )}}
  </Query>
)

export default FieldWrapper