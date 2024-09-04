import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { align = 'center', justify = 'center' } = props;
    return <Flex {...props} direction="column" align={align} justify={justify} />;
};
