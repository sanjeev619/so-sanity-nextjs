import { SVGProps, Ref, forwardRef } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
    <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-3 -1 3 6">
	    <path d="M 0 0 A 1 1 0 0 0 0 4 V 5 Q -2 5 -3 5 V -1 H 0" fill="currentColor"/>
    </svg>

);

export const SideBar = forwardRef(SvgComponent);
export default SideBar;
