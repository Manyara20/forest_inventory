// import axios from 'axios'; // Import axios

// const { data: conservanciesData, isLoading: conLoading } = useQuery(
//   ['conservancies'],
//   async () => {
//     try {
//       const res = await axios.get('/conservancy'); // Use axios for the network request
//       return res.data;
//     } catch (error) {
//       console.error('Error:', error);
//       handleError(dispatch, error);
//       throw error; // Re-throw the error to ensure it propagates to React Query
//     }
//   },
//   {
//     onError: (error) => {
//       console.error('Error:', error);
//       handleError(dispatch, error);
//     },
//   }
// );
