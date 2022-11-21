import React from "react";
import styled from "@emotion/styled"

/*
    GNB is flex container that first flex box has 홈, 메일, 협업, 지식, 지원 and second flex box has search bar and third flex box has fax, sms, setting icons
*/
const GNB = () => {
    return (
        <StyledGNBWrapper>
            <StyledGNB>
                    <StyledGNBLeftItem>
                        <div>
                            <StyledGNBLeftItemTab href="#">홈</StyledGNBLeftItemTab>
                        </div>
                        <div>
                            <StyledGNBLeftItemTab href="#">메일</StyledGNBLeftItemTab>
                        </div>
                        <div>
                            <StyledGNBLeftItemTab href="#">협업</StyledGNBLeftItemTab>
                        </div>
                        <div>
                            <StyledGNBLeftItemTab href="#">지식</StyledGNBLeftItemTab>
                        </div>
                        <div>
                            <StyledGNBLeftItemTab href="#">지원</StyledGNBLeftItemTab>
                        </div>
                    </StyledGNBLeftItem>
                    <StyledGNBCenterItem>
                        <h1>LOGO</h1>
                        <StyledGNBInput type="text" placeholder="검색어를 입력하세요." />
                        <div style={{display:'flex'}}>
                            <div>a</div>
                            <div>b</div>
                        </div>
                    </StyledGNBCenterItem>
                    <StyledGNBRightItem>
                        <div>팩스</div>
                        <div>SMS</div>
                        <div>설정</div>
                    </StyledGNBRightItem>
            </StyledGNB>
        </StyledGNBWrapper>
    )
}

const StyledGNBWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid #e5e5e5;
`;

const StyledGNB = styled.div`
    display: flex;
    width: 1180px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;

`;

const StyledGNBLeftItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 298px;
    margin-top: 18px;
    height: 40px;
    background-color: #fff;
`;

const StyledGNBLeftItemTab = styled.a`
    display: block;
    padding: 0 3px 18px 3px;
    margin-right: 20px;
    color: #2dbdb6;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    cursor: pointer;
`;

const StyledGNBCenterItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 10px 19px 10px 32px;
    border-radius: 10px;
    background-color: #2dbdb6;
    z-index:2;
`;

const StyledGNBInput = styled.input`
    width: 476px;
    height: 40px;
    padding: 0 10px;
    border: none;
    border-radius: 10px;
    outline: transparent;
`;

const StyledGNBRightItem = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;
    align-items: center;
    height: 40px;
    background-color: #fff;
`;

export default GNB

    
    
    
    