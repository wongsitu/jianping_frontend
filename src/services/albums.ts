import { QueryFunction, QueryKey } from 'react-query';
import apiClient from './apiClient';
import { PaginatedResult } from './types';
import { PhotosResponse } from './photos';

export type AlbumsResponse = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  updatedAt: string;
  publicationDate: string;
  photos?: PhotosResponse[];
};

export type PaginatedAlbumsResponse = PaginatedResult<AlbumsResponse>;

type AlbumsVariables = {
  slug: string;
  pageSize?: number;
};

export const fetchAlbums: QueryFunction<
  PaginatedAlbumsResponse,
  QueryKey
> = async ({ queryKey }) => {
  const [, variables] = queryKey as [unknown, AlbumsVariables | undefined];

  return apiClient
    .get<PaginatedAlbumsResponse>('/api/albums/', {
      params: { pageSize: variables?.pageSize },
    })
    .then(res => res.data);
};
