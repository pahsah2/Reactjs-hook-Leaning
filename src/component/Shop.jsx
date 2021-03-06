import React , { useEffect } from 'react';
import ItemCard from './ItemCard';
import items from '../items';
import '../style/shop.scss';
export default function Shop() {
    useEffect(() => {
        const originlTitle = document.title;
        document.title = 'Shop';
        return () => {
            document.title = originlTitle;
        };
    });
    return (
        <div id="shop">
            {[...items.keys()].map((key) => {
                return(
                    <ItemCard
                        item={items.get(key)}
                        key={key}
                        link={key}
                        modifier={false} />
                )
            })}
        </div>
    )
}