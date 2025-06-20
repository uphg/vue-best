import IconAccessibility from '~icons/lucide/accessibility'

const IconPage = defineComponent({
  name: 'IconPage',
  setup() {
    return () => (
      <div>
        <h1>Icon Page</h1>
        <p>This page showcases various icons. <IconAccessibility /></p>
      </div>
    );
  }
})


export default IconPage;