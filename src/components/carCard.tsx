import { CardContent, Flex, Link, Row, Spacer, Text } from "vcc-ui";
import { Car } from "../type/car.interface";
import Image from "next/image";
import styles from "../../public/css/carCard.module.css";

interface CardProps {
  car: Car
}


export function CarCard({ car }: CardProps) {
  console.log(car.modelName, "modalName");
  return (
    <div className={styles.cardWrapper}>
      <Text subStyle="emphasis" variant="columbus" extend={{ opacity: 0.5, textTransform: "uppercase" }}>{car?.bodyType}</Text>
      <Flex extend={{
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        margin: 0,
        flexFlow: "wrap"
      }}>
          <Text subStyle="emphasis" variant="hillary">{car?.modelName}</Text>
          <Spacer />
          <Text variant="hillary" extend={{ opacity: 0.5 }}>{car?.modelType}</Text>
      </Flex>
      <Spacer />
      <Image src={car?.imageUrl} alt={car?.modelName} width="200" height="150" />
      <Spacer />
      <Flex extend={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}>
        <Link href={""} arrow="right">Shop</Link>
        <Spacer />
        <Link href={""} arrow="right">Learn</Link>
      </Flex>
    </div>
  )
}