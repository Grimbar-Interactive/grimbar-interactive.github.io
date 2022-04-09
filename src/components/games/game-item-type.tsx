import { GamePlatform, PortfolioItemType } from "components";

export default type GameItemType extends PortfolioItemType<GameItemType> = {
	platforms: GamePlatform[],
}