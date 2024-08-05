import Device from "../../entities/Device";

interface Props {
  device: Device;
}

const GameCard = ({
  device: { name, title, subtitle, description },
}: Props) => {
  const mode = name == "iphone-11-pro" ? "light" : "dark";

  return (
    <section className={"hero " + name}>
      {/* <Image src={getCroppedImageUrl(background_image)} /> */}
      <div className="container">
        <div className={"title title-" + mode}>
          <h2 className={"title-heading title-heading-" + name}>{title}</h2>
          <h3 className="title-sub-heading">{subtitle}</h3>
          <p className="title-price">{description}</p>
        </div>
        <div className="button">
          <a href="#" className={"button-link button-link-" + mode}>
            Learn more
          </a>
          <a href="#" className={"button-link button-link-" + mode}>
            Buy
          </a>
        </div>
      </div>
    </section>
  );
};

export default GameCard;
