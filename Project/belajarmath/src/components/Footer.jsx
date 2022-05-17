export default function Footer(){

    console.log(styles)
    return(
        <div className="row" id="footer" style={styles.footer}>
            <div className="col-6">About Us</div>
            <div className="col-6">Contact Us</div>
        </div>
    )
}

const styles ={

    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%'
    }
}