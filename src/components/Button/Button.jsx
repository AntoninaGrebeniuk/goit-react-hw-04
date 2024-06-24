
import { LoadMore } from './Button.styled';

export function Button({ loadMore, children }) {
  return (
    <LoadMore type="button" onClick={loadMore}>
      {children}
    </LoadMore>
  );
}


