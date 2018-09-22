import React from 'react'
import { Card, CardBody, CardTitle, Table, Button } from 'reactstrap'
import { Trash } from 'react-feather'
import './index.css'

const Shopping = ({ cart, removeFromCart }) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>
                        <Table>
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td className="text-right">${product.price}</td>
                                        <td className="text-right"><Button size="sm" color="danger" onClick={() => removeFromCart(product)}><Trash /></Button></td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4" className="footer">
                                        Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
                                    </td>
                                </tr>
                            </tfoot>
                        </Table>
                    </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Shopping