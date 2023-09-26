module.exports = {
    ci: {
      collect: {
        staticDistDir: "./dist/basic-calculator",
        isSinglePageApplication: true,
        numberOfRuns: 2,
      },
      assert: {
        assertions: {
          "categories:performance": ["error", { minScore: 0.75 }],
          "categories:accessibility": ["error", { minScore: 0.50 }],
          "categories:best-practices": ["error", { minScore: 0.75 }],
          "categories:seo": "off",
          "categories:pwa": "off",
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };