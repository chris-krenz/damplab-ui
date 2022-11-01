import React, { useContext } from 'react'
import { CanvasContext } from '../contexts/Canvas'

export default function Checkout() {

    const val = useContext(CanvasContext);

    // function that traverses over nodes and edges and returns a list of all the nodes in order
    const traverse = (nodes: any, edges: any) => {
        let node = nodes[0];
        let list = [node];
        let i = 0;
        while (i < edges.length) {
            let edge = edges[i];
            if (edge.source === node.id) {
                node = nodes.find((n: any) => n.id === edge.target);
                list.push(node);
                i = 0;
            } else {
                i++;
            }
        }
        return list;
    }

    return (
        <div>
            <div>
                <h1>Checkout</h1>
                {
                    // print node order line by line
                    traverse(val.nodes, val.edges).map((node: any) => {
                        console.log(node);
                        return (
                            <div>
                            <div style={{ border: 'solid 1px', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', padding: 20, marginBottom: 20 }}>
                                <div>
                                    <img src={node.data.icon} alt={node.name} style={{ width: 30 }} />
                                </div>
                                <div>
                                    {node.name}
                                </div>
                                <div>
                                    {JSON.stringify(node.data.inputBaseParams)}
                                </div>
                            </div>
                                <p>
                                    |
                                </p>
                                <p>
                                    V
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
        
    )
}