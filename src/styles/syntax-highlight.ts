import { css } from '@emotion/core'
import { mq } from './media-queries'
import { scale } from '../utils/typography'

export const syntaxHighlightStyle = css`
  .gatsby-highlight {
    position: relative;
  }

  .gatsby-highlight pre[class*="language-"] {
    border: none;
    margin-bottom: 2.0rem;
    padding: 2.0em 1.5em;
  }

  .gatsby-highlight pre[class*='language-']::before {
    content: 'code';
    background: #ddd;
    border-radius: 0 0 0 4px;
    color: #000000;
    font-size: 0.75rem;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.25rem 0.4rem 0.25rem 0.5rem;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 0;
  }

  .gatsby-highlight pre[class*='language-js']::before,
  .gatsby-highlight pre[class*='language-javascript']::before {
    content: 'js';
    background: #f7df1e;
  }

  .gatsby-highlight pre[class*='language-ts']::before,
  .gatsby-highlight pre[class*='language-typescript']::before {
    content: 'typescript';
    background: #007acc;
    color: #fff;
  }

  :not(pre) > code[class*="language-"] {
    border: none;
  }

  p > code[class*="language-"] {
    padding: 0.2rem 0.25rem;
    margin: 0 0.25rem;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #c3cee3;
    background: #263238;
    font-family: Roboto Mono, monospace;
    font-size: ${scale(-0.25).fontSize};
    ${mq[0]} {
      font-size: ${scale(-0.2).fontSize};
    }
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #363636;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #363636;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #c3e88d;
  }

  .token.attribute {
    color: #c3e88d;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #f2ff00;
  }

  .token.color {
    color: #f2ff00;
  }

  .token.comment {
    color: #B1C2C8;
  }

  .token.constant {
    color: #c792ea;
  }

  .token.deleted {
    color: #f07178;
  }

  .token.doctype {
    color: #546e7a;
  }

  .token.entity {
    color: #f07178;
  }

  .token.function {
    color: #c792ea;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c792ea;
    font-style: italic;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.prolog {
    color: #546e7a;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #c3e88d;
  }

  .token.pseudo-element {
    color: #c3e88d;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #f07178;
  }

  .token.string {
    color: #c3e88d;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #f07178;
  }

  .token.unit {
    color: #f07178;
  }

  .token.url {
    color: #fd9170;
  }

  .token.variable {
    color: #f07178;
  }
`