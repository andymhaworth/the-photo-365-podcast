import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix, attribute} from '../utils';
import '../sass/main.scss';
import Announcement from './Announcement';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        let style = _.get(this.props, 'pageContext.site.siteMetadata.style', null) || 'classic';
        let font = _.get(this.props, 'pageContext.site.siteMetadata.base_font', null) || 'sans-serif';
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.seo.title', null) ? (_.get(this.props, 'pageContext.frontmatter.seo.title', null)) : _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null)}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.seo.description', null) || ''} />
                    {_.get(this.props, 'pageContext.frontmatter.seo.robots', null) && (
                    <meta name="robots" content={_.join(_.get(this.props, 'pageContext.frontmatter.seo.robots', null), ',')}/>
                    )}
                    {_.map(_.get(this.props, 'pageContext.frontmatter.seo.extra', null), (meta, meta_idx) => {
                        let key_name = _.get(meta, 'keyName', null) || 'name';
                        return (
                          _.get(meta, 'relativeUrl', null) ? (
                            _.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                                let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                                let rel_url = withPrefix(_.get(meta, 'value', null));
                                let full_url = domain + rel_url;
                                return (
                                  <meta key={meta_idx} {...(attribute(key_name, _.get(meta, 'name', null)))} content={full_url}/>
                                );
                            })())
                          ) : 
                            <meta key={meta_idx + '.1'} {...(attribute(key_name, _.get(meta, 'name', null)))} content={_.get(meta, 'value', null)}/>
                        )
                    })}
                    {(style === 'bold') ? (
                      (font === 'serif') ? (
                      <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/> 
                      ) : 
                      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                    ) : ((style === 'classic') ? (
                      (font === 'serif') ? (
                      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                      ) : 
                      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                    ) : 
                      (font === 'serif') ? (
                      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                      ) : 
                      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
                    )}
                    {_.get(this.props, 'pageContext.site.siteMetadata.favicon', null) && (
                    <link rel="icon" href={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.favicon', null))}/>
                    )}
                    <body className={'layout-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_type', null) + ' style-' + _.get(this.props, 'pageContext.site.siteMetadata.style', null) + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null) + ' mode-' + _.get(this.props, 'pageContext.site.siteMetadata.mode', null) + ' font-' + _.get(this.props, 'pageContext.site.siteMetadata.base_font', null)} />
                
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/images/favicon/site.webmanifest"></link>
                </Helmet>
                <div id="site-wrap" className="site">
                	{(_.get(this.props, 'pageContext.site.siteMetadata.header.has_anncmnt', null) && _.get(this.props, 'pageContext.site.siteMetadata.header.anncmnt_content', null)) && (
                		_.get(this.props, 'pageContext.site.siteMetadata.header.anncmnt_is_home_only', null) ? (
                			(_.get(this.props, 'pageContext.url', null) === '/') && (
                				<Announcement {...this.props} site={this.props.pageContext.site} />
                			)
                		) : 
                			<Announcement {...this.props} site={this.props.pageContext.site} />
                	)}
                	<Header {...this.props} />
                	<main id="content" className="site-content">
                		{this.props.children}
                	</main>
                	<Footer {...this.props} />
                </div>
                {(_.get(this.props, 'pageContext.site.siteMetadata.header.has_primary_nav', null) || _.get(this.props, 'pageContext.site.siteMetadata.header.has_secondary_nav', null)) && (
                <div className="nav-overlay js-nav-toggle" />
                )}
            </React.Fragment>
        );
    }
}
