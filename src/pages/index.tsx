import * as React from 'react';

import { Link, navigate } from 'gatsby';

import Layout from '../components/Layout';
import { getLanguageName, getLocaleList } from '../utils/languages';

interface LanguageNode {
  name: string;
  locale: string;
}

export default class LanguagePage extends React.Component {
  private static loadLocale(): string {
    return localStorage.getItem('locale');
  }

  private static storeLocale(locale: string) {
    localStorage.setItem('locale', locale);
  }

  // public componentDidMount() {
  //   const locale = LanguagePage.loadLocale();
  //   if (locale) {
  //     navigate(locale);
  //   }
  // }

  public render() {
    return (
      <Layout>
        <div className="container">
          {getLocaleList().map(locale => (
            <Link
              key={locale}
              to={locale}
              onClick={() => LanguagePage.storeLocale(locale)}
            >
              <div className="card">
                <div className="card-content">
                  <div className="content">{getLanguageName(locale)}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    );
  }
}
