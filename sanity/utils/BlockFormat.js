import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";

const textColors = [
  { label: 'Red', value: '#FF0000' },
  { label: 'Green', value: '#008000' },
  { label: 'Blue', value: '#0000FF' },
  { label: 'Yellow', value: '#FFFF00' },
  { label: 'Cyan', value: '#00FFFF' },
  { label: 'Magenta', value: '#FF00FF' },
  { label: 'Orange', value: '#FFA500' },
  { label: 'Purple', value: '#800080' },
  { label: 'Teal', value: '#008080' },
  { label: 'Pink', value: '#FFC0CB' },
  { label: 'Brown', value: '#A52A2A' },
  { label: 'Gold', value: '#FFD700' },
  { label: 'Olive', value: '#808000' },
  { label: 'Indigo', value: '#4B0082' },
  { label: 'Turquoise', value: '#40E0D0' }
]
const highlightColors = [
  { label: 'Light Yellow', value: '#FFFF99' },
  { label: 'Light Green', value: '#CCFFCC' },
  { label: 'Light Blue', value: '#CCE5FF' },
  { label: 'Light Pink', value: '#FFCCCC' },
  { label: 'Light Orange', value: '#FFE5CC' },
  { label: 'Light Purple', value: '#E5CCFF' },
  { label: 'Mint Green', value: '#CCFFEB' },
  { label: 'Light Cyan', value: '#CCFFFF' },
  { label: 'Peach', value: '#FFDAB9' },
  { label: 'Lavender', value: '#E6E6FA' }
]

const BlockFormat = [

{type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'Heading 1', value: 'h1'},
    {title: 'Heading 2', value: 'h2'},
    {title: 'Heading 3', value: 'h3'},
    {title: 'Heading 4', value: 'h4'},
    {title: 'Heading 5', value: 'h5'},
    {title: 'Heading 6', value: 'h6'},
    {title: 'Quote', value: 'blockquote'},
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Code", value: "code" },
      { title: "Underline", value: "underline" },
      { title: "Strike", value: "strike-through" },
      {title: 'Left', value: 'left', icon: AlignLeft, component: (props) => TextAlign(props)},
      {title: 'Center', value: 'center', icon: AlignCenter, component: (props) => TextAlign(props)},
      {title: 'Right', value: 'right', icon: AlignRight, component: (props) => TextAlign(props)},
    ],
    annotations: [
      {name: 'link', type: 'object',title: 'External link',
      fields: [
        {name: 'href',type: 'url',title: 'URL'},
        {title: 'Open in new tab', name: 'blank', type: 'boolean',initialValue: true},
      ]
      },
      {type: 'textColor',
          options: {
            enableSearch: true,
            colorFormat: 'hex',
            colorList: textColors,
          }
      },
      {type: 'highlightColor',
          options: {
            enableSearch: true,
            colorFormat: 'hex',
            colorList: highlightColors,
          }
      },
    ]
  },
  lists: [
    {title: 'Bullet', value: 'bullet'},
    {title: 'Numbered', value: 'number'}
  ],
},

{
  type: "image",
  fields:[
    {
      name: 'position', title: 'Position (Left / Center / Right)', type: 'string',
      initialValue: 'center',
      options: {
        layout: 'radio',
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ]
      }
    },
    {
      name: 'width', title: 'Width ( Full / Half / Default )', type: 'string',
      initialValue: 'default',
      options: {
        layout: 'radio',
        list: [
          {title: 'Full', value: 'full'},
          {title: 'Half', value: 'half'},
          {title: 'Default', value: 'default'},
        ]
      }
    }
  ]
}

]

export default BlockFormat;



const TextAlign = (props) => {
  return (
      <div style={{textAlign: props.value ? props.value : 'left', width: '100%'}}>
          {props.children}
      </div>
  )
}

