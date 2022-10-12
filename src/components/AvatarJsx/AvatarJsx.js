import './AvatarJsx.css'

const AvatarJsx = () => {
    const src = `https://www.latercera.com/resizer/94WUH_0dKQQApDdrg4SvdCRJlXk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RKJGQU5T7RDCHPDKABKDBTPT54.jpg`

    return(
        <picture>
            <img src={src} alt='avatar'/>
            Euge
        </picture>
    )

}

export default AvatarJsx
