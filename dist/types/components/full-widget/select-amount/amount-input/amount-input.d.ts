export declare class AmountInput {
    el: HTMLElement;
    private inputRef;
    maxDecimals: number;
    selectedAmount: string;
    isHovered: boolean;
    amountTooLow: boolean;
    watchAmount(newValue: string): void;
    componentWillLoad(): void;
    isValidNumber(value: string): boolean;
    handleInput(event: Event): void;
    handleStateChange: () => void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
