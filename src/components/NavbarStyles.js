import styled from 'styled-components';
export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
/* Fix your navbar by using below two lines of code */
position: sticky;
top:0;
/* Fix your navbar by using above two lines of code */
z-index: 10;

@media screen and (max-width: 960px) {
	transition: 0.8s all ease
}
`;

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled.a`
color: black;
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top:0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
font-size:18px;


@media screen and (max-width: 960px) {
	display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled.a`
color: #000000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
color: #000000;
}
`

export  const button =styled.button`

-webkit-border-radius: 7;
-moz-border-radius: 7;
border-radius: 7px;
font-family: Georgia;
display: inline-block;
background-color:  #c2c4c5;
;
color: #be0c0c;
font-size: 20px;
padding: 5px 20px 5px 20px;
border: solid #c2c4c5 2px;
cursor: pointer;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
		  0 2px 10px 0 rgba(0,0,0,0.07);
-webkit-transition: all 300ms ease;
transition: all 300ms ease;
}

.mssg_button:hover {
background: #b9bfc2;
	background-image: -webkit-linear-gradient(top, #b9bfc2, #a4a8a6);
	background-image: -moz-linear-gradient(top, #b9bfc2, #a4a8a6);
	background-image: -ms-linear-gradient(top, #b9bfc2, #a4a8a6);
	background-image: -o-linear-gradient(top, #b9bfc2, #a4a8a6);
	background-image: linear-gradient(to bottom, #b9bfc2, #a4a8a6);
	text-decoration: none;
transform: translateY(1px);
box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
		  0 1px 1px 0 rgba(0,0,0,0.09);
}`