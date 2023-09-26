module.exports = {
    ci: {
      collect: {
        staticDistDir: "./dist/basic-calculator",
        isSinglePageApplication: true,
        numberOfRuns: 2,
      },
      assert: {
        assertions: {
          "categories:performance": ["error", { minScore: 0.25 }],
          "categories:accessibility": ["error", { minScore: 0.25 }],
          "categories:best-practices": ["error", { minScore: 0.25 }],
          "categories:seo": "off",
          "categories:pwa": "off",
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };