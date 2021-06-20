const { toast: reactToast } = require('react-toastify');

const toastProperties = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined
};

type ToastParamsType = {
  type: 'success' | 'error' | null;
  message: String | null;
}

export const toast = ({ type, message }: ToastParamsType) => {
	if (!message) {
		if (type === 'error') {
			message = 'Something went wrong.';
		} else {
			return;
		}
	}

	switch (type) {
		case 'success':
			reactToast.success(message, { ...toastProperties });
			break;

		case 'error':
			reactToast.error(message, { ...toastProperties });
			break;

		default:
			reactToast(message, { ...toastProperties });
			break;
	}
};
