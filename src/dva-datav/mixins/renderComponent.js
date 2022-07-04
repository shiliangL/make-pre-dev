/*
 * @Author: shiliangL
 * @Date: 2022-04-23 20:01:55
 * @LastEditTime: 2022-05-31 15:30:49
 * @LastEditors: Do not edit
 * @Description:
 */
export default {
  components: {
    renderComponent: {
      functional: true,
      props: {
        row: Object,
        index: Number,
        render: Function,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, opt) => {
        const params = {
          row: opt.props.row,
          index: opt.props.index
        }
        if (opt.props.column) params.column = opt.props.column
        return opt.props.render(h, params)
      }
    }
  }
}
