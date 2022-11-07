// mock the user api
const userFetcher: any = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  if (document.cookie.includes('swr-test-token=swr')) {
    // authorized
    return {
      name: 'Dumb Ass',
      avatar: 'https://picsum.photos/200',
    };
  }

  // not authorized
  const error: any = new Error('Not authorized!');
  error.status = 403;
  throw error;
};
export default userFetcher;
