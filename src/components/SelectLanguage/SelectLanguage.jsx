import { LOCALES } from 'components/i18n/locales';
import { LocationContext, HandleChangeContext } from 'components/App';
import { useContext } from 'react';

export const SelectLanguage = () => {
    const currentLocale = useContext(LocationContext)
    const handleChange = useContext(HandleChangeContext)

  const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Українська', code: LOCALES.UKRANIAN },
  ];

  return (
    <>
      <div>
        Languages
        <select onChange={handleChange} value={currentLocale}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
