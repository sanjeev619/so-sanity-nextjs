import { SVGProps, Ref, forwardRef } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
    <svg ref={ref} {...props} width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.45264 16.6995C15.1711 15.6489 28.608 17.5455 28.608 33.5371M28.608 33.5371L22.5531 29.3899M28.608 33.5371L32.6723 28.3946" stroke="currentStroke" strokeWidth="2.4" strokeLinecap="round"/>
</svg>
);

export const FeaturedArrow = forwardRef(SvgComponent);
export default FeaturedArrow;
