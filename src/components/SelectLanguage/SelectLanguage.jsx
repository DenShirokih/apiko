import { LOCALES } from 'components/i18n/locales';
import { LocationContext, HandleChangeContext } from 'components/App';
import { useContext } from 'react';
import { BiWorld } from 'react-icons/bi';
import styled from './Select.module.css';

export const SelectLanguage = () => {
  const currentLocale = useContext(LocationContext);
  const handleChange = useContext(HandleChangeContext);
  console.log(styled);

  const languages = [
    {
      name: 'En',
      code: LOCALES.ENGLISH,
      flag: 'https://www.svgrepo.com/show/237250/england.svg',
    },
    {
      name: 'Ua',
      code: LOCALES.UKRANIAN,
      flag: 'https://www.svgrepo.com/show/237427/ukraine.svg',
    },
  ];

  return (
    <>
      <div className={styled.dropdown}>
        <button
          className={styled.dropbtn}
          onChange={handleChange}
          value={currentLocale}
        >
          <BiWorld />
        </button>
        <div className={styled.dropdownContent}>
          {languages.map(({ name, code, flag }) => (
            <>
              <button
                className={styled.buttonItem}
                key={code}
                value={code}
                onClick={handleChange}
              >
                {name}
                <img src={flag} alt="" />
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
