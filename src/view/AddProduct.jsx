import { AddProductHeader } from 'components/AddProduct/AddProductHeader/AddProductHeader';
import { authSelectors } from 'redux/authSelectors';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { getDatabase, ref, set } from 'firebase/database';

const values = {
  name: '',
};
export const AddProductsView = () => {
  const id = useSelector(authSelectors.getId);

  const handleSubmit = value => {
    writeUserData(value.name, id);
  };
  function writeUserData(name, id) {
    const db = getDatabase();
    console.log(db);
    set(ref(db, 'users/' + id), {
      username: name,
    });
  }
  return (
    <>
      <AddProductHeader />
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name"></Field>
        </Form>
      </Formik>
    </>
  );
};
