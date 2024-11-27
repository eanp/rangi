export type Meta = {
  current_page: number;
  total_page: number;
  size: number;
  pagination_meta: Array<number | string>
}

export type Pageable<T> = {
  data: Array<T>;
  meta: Meta
}
