// import { api } from '@/lib/api-client';
import type { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getCoordinate = async (address: string) => {
  const resp = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
  );

  if (!resp.ok) {
    throw new Error('Failed to fetch coordinates');
  }

  const data = await resp.json();

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return [parseFloat(data[0].lat), parseFloat(data[0].lon)] as [number, number];
};

export const getCoordinateQueryOptions = (address: string) => {
  return queryOptions({
    queryKey: ['coords', address],
    queryFn: () => getCoordinate(address),
  });
};

export type UseGetCoordinateOptions = {
  address: string;
  queryConfig?: QueryConfig<typeof getCoordinateQueryOptions>;
};

export const useGetCoordinate = ({
  address,
  queryConfig,
}: UseGetCoordinateOptions) => {
  return useQuery({
    ...getCoordinateQueryOptions(address),
    ...queryConfig,
  });
};
