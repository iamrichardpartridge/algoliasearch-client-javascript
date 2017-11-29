import { AlgoliaError } from 'algoliasearch-errors';

// todo: make this into a package with the old code
export default function browseAll(...args) {
  return new AlgoliaError(
    `You used 'browseAll(${JSON.stringify(args)})' this isn't supported,

instead use the replacement package: algoliasearch-extras

see: https://alg.li/client#algoliasearch-extras`
  );
}
