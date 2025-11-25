import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Welcome to Chipro",
    },
    {
      type: "category",
      label: "Quick Start",
      link: { type: "doc", id: "quick-start/overview" },
      items: [
        { type: "doc", id: "quick-start/sign-in" },
        { type: "doc", id: "quick-start/libraries-cells" },
        { type: "doc", id: "quick-start/tools" },
        { type: "doc", id: "quick-start/mohet" },
      ],
    },
    {
      type: "category",
      label: "Chipro",
      link: { type: "doc", id: "chipro/overview" },
      items: [
        {
          type: "category",
          label: "Design Manager",
          link: {
            type: "generated-index",
            title: "Design Manager",
            description:
              "Design Manager is the shared home base inside Chipro. It keeps projects, libraries, categories, and cells aligned in one screen while tool shortcuts, automation hooks, and AI co-pilots stay in sync.",
            slug: "/chipro/design-manager",
          },
          items: [
            {
              type: "category",
              label: "Layout",
              link: {
                type: "generated-index",
                title: "Layout",
                slug: "/chipro/design-manager/layout",
              },
              items: [
                {
                  type: "doc",
                  id: "chipro/design-manager/layout/workspace-sidebar",
                },

                {
                  type: "category",
                  label: "Projects",
                  link: {
                    type: "doc",
                    id: "chipro/design-manager/layout/projects",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/projects/project-options",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/projects/create-project",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/projects/view-project",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/projects/update-project",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/projects/delete-project",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Libraries",
                  link: {
                    type: "doc",
                    id: "chipro/design-manager/layout/libraries",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/libraries/library-options",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/libraries/create-library",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/libraries/view-library",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/libraries/update-library",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/libraries/delete-library",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Categories",
                  link: {
                    type: "doc",
                    id: "chipro/design-manager/layout/categories",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/category-options",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/create-category",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/assign-category",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/view-category",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/update-category",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/categories/delete-category",
                    },
                  ],
                },
                {
                  type: "doc",
                  id: "chipro/design-manager/layout/actions",
                  label: "Actions",
                },

                {
                  type: "category",
                  label: "Cells",
                  link: {
                    type: "doc",
                    id: "chipro/design-manager/layout/cells",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/cell-actions",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/create-cell",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/cell-view",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/cell-edit",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/cell-delete",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/cells/cell-change-category",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Cell Views",
                  link: {
                    type: "doc",
                    id: "chipro/design-manager/layout/views",
                  },
                  items: [
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/views/create-view",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/views/librelane",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/views/manage-views",
                    },
                    {
                      type: "doc",
                      id: "chipro/design-manager/layout/views/open-in-tools",
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Clipboard System",
              link: {
                type: "doc",
                id: "chipro/design-manager/clipboard/clipboard",
              },
              items: [
                {
                  type: "doc",
                  id: "chipro/design-manager/clipboard/cells",
                  label: "Cells",
                },
                {
                  type: "doc",
                  id: "chipro/design-manager/clipboard/views",
                  label: "Views",
                },
              ],
            },
            {
              type: "category",
              label: "Versioning",
              link: {
                type: "doc",
                id: "chipro/design-manager/versioning/overview",
              },
              items: [
                {
                  type: "doc",
                  id: "chipro/design-manager/versioning/creating-commits",
                },
                {
                  type: "doc",
                  id: "chipro/design-manager/versioning/restoring-commits",
                },
                {
                  type: "doc",
                  id: "chipro/design-manager/versioning/tags",
                },
              ],
            },
            {
              type: "category",
              label: "PDKs",
              link: {
                type: "doc",
                id: "chipro/design-manager/pdks/overview",
              },
              items: [
                {
                  type: "doc",
                  id: "chipro/design-manager/pdks/install",
                },

                {
                  type: "doc",
                  id: "chipro/design-manager/pdks/manage",
                },
              ],
            },
          ],
        },

        // ── Mohet Assistant ─────────────────────────────
        {
          type: "doc",
          id: "chipro/mohet",
          label: "Mohet Assistant",
        },
      ],
    },
  ],
};

export default sidebars;
