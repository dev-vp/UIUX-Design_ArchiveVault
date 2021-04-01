# REPORT.md

## Mission 1: Design the UI using the given images
Based on the mock up provided, there appears to be 2 main sections:
- Header Section
- Query Result Section
Therefore in terms of my UI implementation, each section was designed separately. The "Header Section" was fairly straight forward, however the "Query Result Section" required additional planning. Although this section could be designed with either `table` elemnts and/or `grid` style, these were not ideal in the long run due to the mockup's mobile view. The DOM structure needed to accomadate the changing UI (i.e. column-wrapping, element reordering, etc.). As a result, I decided to proceed with `flex box`, thus ensuring more versitle customization necessary for mobile responsiveness down the lines.

Upon completing the UI to mirror that of the mockup, I implemented a randomized mock data generator (`utils/mockData.js`) to not only have data for development/testing purposes, but to also simulate JSON retrieval from an API call to a database.

The generated data was then utilized for testing/designing the following features and functionalities:
- Searchable with Single Date and Date Range Queries
- Column Filtering (i.e. ascending, decesnding, and alphabetically)
- Date Display based on time elapsed, for example:
<details>
`HH:MM` format for emails received today.
`Month Day` format for emails received during the current year.
`YYYY/MM/DD` format for all remaining emails received prior to the current year.
</details>

Additionally, in order to properly read the "search queries", dates needed to be parsed (via REGEXP) and compatible for filtering & comparing against existing "email dates".

And finally, media queries were added and styled accordingly to the mockup.

## Mission 2: Extend the UI in order to implement a new feature


## Mission 3: Indicate UI parts that can be improved
*(Please refer to the [IMPROVEMENTS.md](https://github.com/dev-vp/2021-hennge-challenge/blob/main/IMPROVEMENTS.md) file.)*
