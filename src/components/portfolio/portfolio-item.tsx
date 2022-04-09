export type PortfolioItemType<T extends PortfolioItemType<T>> = {
	title: string,
	client: string,
	description: string,
	mainURL: string | undefined,
	photoURL: string,
	renderItem(item: T): HTMLElement
}