import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from './index';
import { within } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = getAllByTestId('repositoryItem');

      expect(repositoryItems).toBeDefined();
      expect(repositoryItems).toHaveLength(2);

      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      
      //renders fullNames of both repositories
      expect(within(firstRepositoryItem).getByText('jaredpalmer/formik')).toBeDefined();
      expect(within(secondRepositoryItem).getByText('async-library/react-async')).toBeDefined();

      //renders description
      expect(within(firstRepositoryItem).getByText('Build forms in React, without the tears')).toBeDefined();
      expect(within(secondRepositoryItem).getByText('Flexible promise-based React data loader')).toBeDefined();

      //renders language
      expect(within(firstRepositoryItem).getByText('TypeScript')).toBeDefined();
      expect(within(secondRepositoryItem).getByText('JavaScript')).toBeDefined();

      //stars
      const firstStarStat = within(firstRepositoryItem).getByTestId('stat:Stars');
      const secondStarStat = within(secondRepositoryItem).getByTestId('stat:Stars');
      expect(firstStarStat).toBeDefined();
      expect(firstStarStat).toHaveTextContent('21.9k');
      expect(secondStarStat).toHaveTextContent('1.8k');

      //forks
      const firstForkStat = within(firstRepositoryItem).getByTestId('stat:Forks');
      const secondForkStat = within(secondRepositoryItem).getByTestId('stat:Forks');
      expect(firstForkStat).toHaveTextContent('1.6k');
      expect(secondForkStat).toHaveTextContent('69');

      //rating
      const firstRatingStat = within(firstRepositoryItem).getByTestId('stat:Rating');
      const secondRatingStat = within(secondRepositoryItem).getByTestId('stat:Rating');
      expect(firstRatingStat).toHaveTextContent('88');
      expect(secondRatingStat).toHaveTextContent('72');

      //reviewCount
      const firstReviewtat = within(firstRepositoryItem).getByTestId('stat:Reviews');
      const secondReviewStat = within(secondRepositoryItem).getByTestId('stat:Reviews');
      expect(firstReviewtat ).toHaveTextContent('3');
      expect(secondReviewStat).toHaveTextContent('3');
    });
  });
});