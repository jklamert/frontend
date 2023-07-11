"use client";

import React from "react";
import Header from "../_components/header";
import ActualSidebar from "../_components/actualSidebar";
import { SidebarProvider } from "../context/SidebarContext";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
export default function Index(): JSX.Element {
  const client = new ApolloClient({uri: 'http://localhost:4000', cache: new InMemoryCache()});
  const SEARCH_QUERY = gql`
    query getSearchesForIdentifier(identifier: String){
      getSearchesForIdentifier(identifier: $identifier){
        ID,
        City,
        State,
        Beds,
        Baths,
      }
    }
  `;
    return (
      <ApolloProvider client={client}>
      <SidebarProvider>
        <Header activeNav={-1} />
        <div className="flex dark:bg-gray-900">
          <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
            <MySearchesPage />
          </main>
          <div className="order-1">
            <ActualSidebar />
          </div>
        </div>
      </SidebarProvider>
      </ApolloProvider>
    );
  }

function MySearchesPage(): JSX.Element {

  return (
    <div className="p-6">
        My Searches
    </div>
  );
}
