import { SVGProps, Ref, forwardRef } from 'react';
// width="164" height="93"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
<svg ref={ref} {...props} viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.665894 0.665894V33.3326L26.3326 16.9992L0.665894 0.665894Z" fill="#202020"/>
</svg>
);

export const PlayIcon = forwardRef(SvgComponent);
export default PlayIcon;
