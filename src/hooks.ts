import { useEffect, useState } from "react";

export const useLoading = (resource: () => Promise<any>) => {
	const [appIsReady, setAppIsReady] = useState(false);
	useEffect(() => {
		async function prepare() {
			try {
				await resource();
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	return { appIsReady };
};
