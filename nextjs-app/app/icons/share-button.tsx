import { SVGProps, Ref, forwardRef } from 'react';
// width="164" height="93"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
<svg ref={ref} {...props} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="62" height="62" rx="31" stroke="#666666" strokeWidth="2"/>
<path d="M47.5521 31.3511L34.5921 19.0391V25.9512C22.4961 27.6792 18.1761 36.3192 16.4481 44.9591C20.7681 38.9112 25.9521 36.1462 34.5921 36.1462V43.2312L47.5521 31.3511Z" fill="#666666"/>
</svg>
);

export const ShareIcon = forwardRef(SvgComponent);
export default ShareIcon;
