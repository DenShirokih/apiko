import { LOCALES } from 'components/i18n/locales';
import { LocationContext, HandleChangeContext } from 'components/App';
import { useContext } from 'react';
import { Wrapper } from './SelectLanguge.styled';

export const SelectLanguage = () => {
    const currentLocale = useContext(LocationContext)
    const handleChange = useContext(HandleChangeContext)

  const languages = [
    { name: 'En', code: LOCALES.ENGLISH },
    { name: 'Ua', code: LOCALES.UKRANIAN },
  ];

  return (
    <>
      <Wrapper>
        <select onChange={handleChange} value={currentLocale}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
             {name}
            </option>
          ))}
        </select>
      </Wrapper>
    </>
  );
};
