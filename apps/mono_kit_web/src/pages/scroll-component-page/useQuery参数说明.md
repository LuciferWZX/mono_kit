# useQuery 参数详细说明

## 返回的状态参数

### 1. **isPending** - 首次加载状态
- **含义**: 表示是否正在执行第一次查询
- **值**: `true` | `false`
- **使用场景**: 显示首次加载的 loading 状态
- **示例**:
  ```typescript
  if (isPending) {
    return <div>首次加载中...</div>
  }
  ```

### 2. **isFetching** - 获取状态
- **含义**: 表示是否正在获取数据（包括重新获取）
- **值**: `true` | `false`
- **使用场景**: 显示任何形式的加载状态
- **示例**:
  ```typescript
  if (isFetching) {
    return <div>正在获取数据...</div>
  }
  ```

### 3. **isError** - 错误状态
- **含义**: 表示查询是否出错
- **值**: `true` | `false`
- **使用场景**: 判断是否需要显示错误信息
- **示例**:
  ```typescript
  if (isError) {
    return <div>加载失败</div>
  }
  ```

### 4. **data** - 查询结果数据
- **含义**: 查询成功时返回的数据
- **值**: `T | undefined`
- **使用场景**: 使用查询到的数据
- **示例**:
  ```typescript
  if (data) {
    return <div>{data.map(item => <div key={item.id}>{item.name}</div>)}</div>
  }
  ```

### 5. **error** - 错误信息
- **含义**: 查询失败时的错误对象
- **值**: `Error | null`
- **使用场景**: 显示具体的错误信息
- **示例**:
  ```typescript
  if (error) {
    return <div>错误: {error.message}</div>
  }
  ```

### 6. **refetch** - 重新获取函数
- **含义**: 手动重新执行查询的函数
- **类型**: `() => Promise<QueryResult>`
- **使用场景**: 用户点击刷新按钮时
- **示例**:
  ```typescript
  <button onClick={() => refetch()}>刷新数据</button>
  ```

## 配置参数

### 1. **queryKey** - 查询键
- **含义**: 查询的唯一标识符
- **类型**: `any[]`
- **作用**: 用于缓存、去重和识别查询
- **示例**:
  ```typescript
  queryKey: ['users', userId] // 用户数据查询
  queryKey: ['posts', { page: 1, limit: 10 }] // 分页查询
  ```

### 2. **queryFn** - 查询函数
- **含义**: 实际执行数据获取的函数
- **类型**: `() => Promise<T>`
- **作用**: 定义如何获取数据
- **示例**:
  ```typescript
  queryFn: async () => {
    const response = await fetch('/api/users')
    return response.json()
  }
  ```

### 3. **enabled** - 启用状态
- **含义**: 是否启用自动查询
- **类型**: `boolean`
- **默认值**: `true`
- **作用**: 控制查询是否自动执行
- **示例**:
  ```typescript
  enabled: false // 禁用自动查询，需要手动调用 refetch()
  enabled: !!userId // 只有当 userId 存在时才执行查询
  ```

## 状态组合示例

```typescript
// 首次加载
if (isPending) return <div>首次加载中...</div>

// 加载失败
if (isError) return <div>加载失败: {error?.message}</div>

// 有数据
if (data) return <div>数据: {JSON.stringify(data)}</div>

// 无数据且不在加载
if (!data && !isFetching) return <div>暂无数据</div>

// 重新获取中
if (isFetching && !isPending) return <div>正在刷新...</div>
```

## 常见使用模式

### 1. **条件查询**
```typescript
const { data } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  enabled: !!userId, // 只有当 userId 存在时才查询
})
```

### 2. **手动触发查询**
```typescript
const { data, refetch } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  enabled: false, // 禁用自动查询
})

// 在需要时手动触发
useEffect(() => {
  refetch()
}, [])
```

### 3. **错误处理**
```typescript
const { data, error, isError } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  retry: 3, // 失败时重试3次
  retryDelay: 1000, // 重试间隔1秒
})
```
