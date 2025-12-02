"use client";

import WebComponentWrapper from "@/components/web-component-wrapper";

interface IProps {
  env?: "production" | "development";
}

export default function TourvisPcFooter({ env = "production" }: IProps) {

  return (
	<div className="mt-auto w-full shrink-0">
		<WebComponentWrapper
		  tagName="footer-widget"
		  attributes={{ env }}
		  fallback={
			<div className="h-16 bg-white border-b border-gray-200 flex items-center justify-center">
			  <div className="text-sm text-gray-500">Loading...</div>
			</div>
		  }
		/>
	</div>
  );
}
