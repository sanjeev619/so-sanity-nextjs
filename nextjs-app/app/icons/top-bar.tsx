import { SVGProps, Ref, forwardRef } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
    <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 2">
	<path d="M 0 0 L 5 0 L 5 2 L 4 2 A 1 1 0 0 0 1 2 L 0 2 L 0 0" fill="currentColor"/>
</svg>
);

export const TopBarIcon = forwardRef(SvgComponent);
export default TopBarIcon;
