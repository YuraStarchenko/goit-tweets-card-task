import { CardUserList } from '../../components/CardUsersList/CardUsersList';
import { getUsers } from '../../service/api';

export const Tweets = () => {
  const products = getUsers();
  return (
    <main>
      <CardUserList products={products} />
    </main>
  );
};
