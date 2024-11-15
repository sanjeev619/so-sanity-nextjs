import { SVGProps, Ref, forwardRef } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
    <svg ref={ref} {...props} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5L1 8.5M8 1.5H2.16667M8 1.5V7.33333" stroke="currentStroke" strokeWidth="1.5"/>
</svg>
);

export const DiagonaArrow = forwardRef(SvgComponent);
export default DiagonaArrow;
