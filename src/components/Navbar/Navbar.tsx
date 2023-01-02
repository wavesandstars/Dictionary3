import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Digits from '../../assets/images/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg'
import { GridLoadingOverlay } from '@material-ui/data-grid';
// import { AuthCheck } from 'reactfire';

const useStyles = makeStyles({
    logo: {
        content: `url(${Digits})`,
        maxWidth: '15%',
        height: 'auto',
        border: 0,
        borderRadius: 7,
        boxShadow: '0 3px 5px 2px rgba(275, 150, 200, .3)'

    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#4F1BAB',
        zIndex: 1,
        borderBottom: '2px solid green',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.p5}`}>
                    </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                {/* <Suspense fallback = {'loading...'}> */}
                        {/* <AuthCheck fallback ={ */}

                        <li>
                      
                        <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                        
                    </li>
                        {/* }> */}
                    
                    <li>
                        <Button>
                        <Link to='/Book' className={`${classes.navbarItem} ${classes.psides}`}>My Dictionary</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                        </Button>

                    </li>
                    <li>
                        <Button>
                            <Link to='Advice' className={`${classes.navbarItem} ${classes.psides}`}>Need a Quote?</Link>
                        </Button>

                    </li>
                    {/* </AuthCheck>
                    </Suspense> */}
                </ul>
            </div>
        </div>
    )
}