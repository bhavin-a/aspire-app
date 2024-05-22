import { Layout, theme } from "antd";
import AvailableBalance from "./components/AvailableBalance";
import { styled } from "styled-components";
import PrimaryButton from "../../components/generic/PrimaryButton";
import Card from "./components/card/Card";
import CardActivity from "./components/card-activity/CardActivity";
import Accordion from "../../components/generic/Accordion";
import TransactionsList from "./components/recent-transactions/TransactionsList";

import recentTransactionsIcon from "../../assets/recent-transactions.svg";
import cardDetailsIcon from "../../assets/details.svg";

import Tabs from "../../components/generic/Tabs";

const { Content } = Layout;

const CardPageHeaderWrapper = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
`;

const TabWrapper = styled.div`
    margin-top: 32px;
    margin-bottom: 16px;
`;

const CardsPageWrapper = styled.div`
    margin-top: 35px;
`;

const AccordionIcon = styled.img`
    height: 24px;
    width: fit-content;
`;

const TransactionWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const CardsPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken();

    const handleClick = (key: string) => {
        console.log(key);
    };

    return (
        <CardsPageWrapper>
            <CardPageHeaderWrapper>
                <AvailableBalance availableBalance={100} />
                <PrimaryButton text="New Card" />
            </CardPageHeaderWrapper>
            <TabWrapper>
                <Tabs
                    items={[
                        { label: "My debit cards", key: "debitCard" },
                        { label: "My company cards", key: "companyCard" }
                    ]}
                    onClick={handleClick}
                />
            </TabWrapper>
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    display: "flex",
                    gap: 46
                }}
            >
                <CardWrapper>
                    <Card
                        name="Bhavin Agarwal"
                        cvv={123}
                        expiry=""
                        type=""
                        cardNumber={123}
                    />
                    <CardActivity />
                </CardWrapper>
                <TransactionWrapper>
                    <Accordion
                        text="Card Details"
                        content={<TransactionsList />}
                        icon={
                            <AccordionIcon src={cardDetailsIcon} alt="logo" />
                        }
                    />
                    <Accordion
                        text="Recent transactions"
                        content={<TransactionsList />}
                        icon={
                            <AccordionIcon
                                src={recentTransactionsIcon}
                                alt="logo"
                            />
                        }
                    />
                </TransactionWrapper>
            </Content>
        </CardsPageWrapper>
    );
};

export default CardsPage;
