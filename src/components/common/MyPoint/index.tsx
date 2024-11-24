import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import { Common } from '@styles/globalStyle';
import PaymentModal from '@components/common/PaymentModal';
import Modal from '@components/common/Modal';
import AlertDialog from '@components/common/Modal/AlertDialog';
import Cookies from 'js-cookie';
import { setOrderId } from '@provider/OrderIdLocation';
import { useNavigate } from 'react-router-dom';

interface MyPointProps {
  showRechargeButton?: boolean;
  refreshKey?: number;
}

const MyPoint: React.FC<MyPointProps> = ({
  showRechargeButton = false,
  refreshKey,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isPaymentWidgetVisible, setIsPaymentWidgetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRechargeOpen, setIsRechargeOpen] = useState(false);
  const [pointBalance, setPointBalance] = useState<number>(0);
  const fetchMemberInfo = async () => {
    try {
      const accessToken = Cookies.get('access_token');
      if (!accessToken) return;

      const response = await fetch('http://3.36.88.170:8080/api/v1/members', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPointBalance(data.data.point || 0);
      } else {
        console.error('Failed to fetch member info');
      }
    } catch (error) {
      console.error('Error fetching member info:', error);
    }
  };

  useEffect(() => {
    fetchMemberInfo();
  }, [refreshKey]);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handlePaymentRequest = async () => {
    const accessToken = Cookies.get('access_token');
    if (!accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    setLoading(true);

    const productMapping: { [key: number]: number } = {
      10000: 2,
      20000: 3,
      30000: 4,
    };

    const productIds = productMapping[selectedAmount ?? 0]
      ? [productMapping[selectedAmount ?? 0]]
      : null;

    if (!productIds) {
      alert('올바른 금액을 선택해주세요.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://3.36.88.170:8080/api/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          idempotencySeed: Math.random().toString(36).substr(2, 10),
          productIds,
        }),
      });

      if (!response.ok) {
        throw new Error('결제 정보 저장 실패');
      }

      const data = await response.json();
      const orderId = data.data?.orderId;

      if (orderId) {
        setOrderId(orderId);
      }
      setIsPaymentWidgetVisible(true);
    } catch (error) {
      alert('결제 요청에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleRechargeClick = () => {
    if (!selectedAmount) {
      alert('충전 금액을 선택해주세요.');
      return;
    }
    setIsRechargeOpen(true);
    fetchMemberInfo();
  };

  const handleCloseModal = () => {
    setIsPaymentWidgetVisible(false);
  };

  return (
    <Container>
      <Title>My Point</Title>
      <PointBalance>
        {pointBalance ? `${pointBalance.toLocaleString()} P` : '0 P'}
      </PointBalance>
      <AmountOptions>
        {[10_000, 20_000, 30_000].map((amount) => (
          <AmountOption key={amount}>
            <input
              type="radio"
              id={`amount-${amount}`}
              name="amount"
              value={amount}
              checked={selectedAmount === amount}
              onChange={() => handleAmountClick(amount)}
            />
            <label htmlFor={`amount-${amount}`}>
              {amount.toLocaleString()}P
            </label>
          </AmountOption>
        ))}
        {showRechargeButton && (
          <Button
            label="충전"
            bgColor={Common.colors.primary}
            radius="30px"
            padding="10px 20px"
            onClick={handleRechargeClick}
            disabled={loading}
            style={{ marginLeft: '20px' }}
          />
        )}
      </AmountOptions>

      {isPaymentWidgetVisible && (
        <PaymentModal
          onClose={handleCloseModal}
          selectedAmount={selectedAmount ?? 0}
        />
      )}

      <Modal
        isOpen={isRechargeOpen}
        onRequestClose={() => setIsRechargeOpen(false)}
        title="포인트 충전"
        content={
          <AlertDialog
            content={`${selectedAmount?.toLocaleString()}P 충전하시겠습니까?`}
            onRequestClose={() => setIsRechargeOpen(false)}
            onRequestConfirm={() => {
              setIsRechargeOpen(false);
              handlePaymentRequest();
            }}
          />
        }
      />
    </Container>
  );
};

MyPoint.defaultProps = {
  showRechargeButton: false,
  refreshKey: 0,
};

export default MyPoint;

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-family: 'PaperlogyBold';
  text-align: left;
`;

const PointBalance = styled.div`
  background-color: ${Common.colors.primary};
  color: white;
  font-size: 1.5rem;
  font-family: 'PaperlogyBold';
  padding: 25px;
  border-radius: 10px;
  text-align: left;
`;

const AmountOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

const AmountOption = styled.div`
  display: flex;
  align-items: center;

  input[type='radio'] {
    margin-right: 5px;
  }

  label {
    font-size: 1rem;
    color: #888;
    cursor: pointer;
  }

  input[type='radio']:checked + label {
    color: #6a0dad;
    font-family: 'PaperlogyBold';
  }
`;
