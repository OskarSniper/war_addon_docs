module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'welcome',
        'prepare'
        ],
    },
    {
      type: 'category',
      label: 'Data Types',
      items: [
        'datatypes/boolean',
        'datatypes/number',
        'datatypes/string',
        'datatypes/table',
        'datatypes/wstring',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'category',
          label: 'ChatWindow',
          items: [
            'api/chatwindow/index',
            {
              type: 'category',
              label: 'Methods',
              items: [
                'api/chatwindow/methods/print'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'LootWindow',
          items: [
            'api/lootwindow/index',
            {
              type: 'category',
              label: 'Methods',
              items: [
                'api/lootwindow/methods/close'
              ]
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/hello_world'
      ]
    }
  ]
};
