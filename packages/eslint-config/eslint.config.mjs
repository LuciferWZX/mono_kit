import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  sortPackageJson: true, // 对 package.json 进行排序
  sortTsconfig: true, // 对 tsconfig.json 进行排序

})
