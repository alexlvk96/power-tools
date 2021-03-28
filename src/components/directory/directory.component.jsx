import React from 'react';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'drills',
                    imageUrl: 'https://www.discounttrader.com.au/wp-content/uploads/2019/02/SB-18-LTX-BL-I-602352650-CORDLESS-HAMMER-DRILL-LIHD-4.0-1.png',
                    id: 1,
                    linkUrl: 'shop/drills'
                  },
                  {
                    title: 'saws',
                    imageUrl: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_843,q_auto,w_1500/c_pad,h_843,w_1500/R8129938-01?pgw=1&pgwact=1',
                    id: 2,
                    linkUrl: 'shop/saws'
                  },
                  {
                    title: 'grinders',
                    imageUrl: 'https://www.dinamitek.com/620-large_default/gws-9-125-angle-grinder-bosch.jpg',
                    id: 3,
                    linkUrl: 'shop/grinders'
                  },
                  {
                    title: 'corded',
                    imageUrl: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_843,q_auto,w_1500/c_pad,h_843,w_1500/R8692212-01?pgw=1&pgwact=1',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/corded'
                  },
                  {
                    title: 'cordless',
                    imageUrl: 'https://image.made-in-china.com/2f0j00aLUfzmTMIWkg/20V-Lithium-Battery-Power-Tool-Cordless-Rotary-Hammer-Drill-8202.jpg' ,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/cordless'
                  }
            ]
        }
    }

    render () {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            </div>
        )
    }
}

export default Directory;