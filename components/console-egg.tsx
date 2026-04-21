"use client";

import { useEffect } from "react";

export function ConsoleEgg() {
	useEffect(() => {
		console.log(
			"%c arihant %c~ hi curious one. source: github.com/arihantbansal/personal-site",
			"background:#22d3ee;color:#000;padding:2px 6px;border-radius:2px;font-weight:600",
			"color:#a3a3a3",
		);
	}, []);
	return null;
}
