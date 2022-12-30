import logo from './logo.svg';
import './App.css';

import {
  query,
  collection,
  where,
} from "firebase/firestore";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { QueryClient, QueryClientProvider } from "react-query";

import { db } from "./firebase";

const queryClient = new QueryClient();

export const useGetTweets = () => {
  const ref = query(
    collection(db, "client-tweets"),
    where("client", "==", "DummyCorp")
  );

  const q = useFirestoreQueryData(["client-tweets"], ref);

  console.log("!!SK >>> q.data: ", q.data)

  return { ...q, data: q?.data?.[0], isLoading: q.isLoading, error: q.error };
};



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <WidgetData />
    </div>
    </QueryClientProvider>
  );
}

const WidgetData = () => {
  const tweets = useGetTweets()

  if (!tweets || !tweets?.data) {
    return <div>Fetching tweets...</div>
  }

  return (
    <>
    {tweets?.data?.tweets?.map((t, index) => {
      return <div key={index}>{t}</div>
    })}
    </>
  )
  // return (
  //   {tweets?.data?.tweets?.map((t) => {
  //     <div key={t}>{t}</div>
  //   })}
  // )
}

export default App;
