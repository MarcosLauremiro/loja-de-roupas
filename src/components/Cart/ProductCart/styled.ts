import styled from 'styled-components';

export const ListCartStyled = styled.li`
                display: flex;
                justify-content: space-between;
                gap: .5rem;

                height: 70px;
                width: 100%;
                figure{
                    width: 70px;
                    height: 70px;

                    img{
                        width: 100%;
                    }
                }
                .description{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .control{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    input{
                        width: 30px;
                        height: 20px;

                        border: none;
                    }
                    button{
                        background: none;
                        border: none;
                        width: 20px;
                    }

                }
`