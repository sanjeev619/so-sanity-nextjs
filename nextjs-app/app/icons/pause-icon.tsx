import { SVGProps, Ref, forwardRef } from 'react';
// width="164" height="93"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
<svg ref={ref} {...props} fill="#000000" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>pause</title><path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" /></svg>
);

export const PauseIcon = forwardRef(SvgComponent);
export default PauseIcon;
