import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// 过滤 <a> 标签不能识别的 props
const filterDOMProps = props => {
  const { passHref, legacyBehavior, forceAnchor, ...rest } = props
  return rest
}

const toHrefString = href => {
  if (typeof href === 'string') {
    return href
  }

  if (
    typeof href === 'object' &&
    href !== null &&
    typeof href.pathname === 'string'
  ) {
    const query = href.query
      ? new URLSearchParams(
        Object.entries(href.query).reduce((acc, [key, value]) => {
          if (value !== undefined && value !== null) {
            acc[key] = String(value)
          }
          return acc
        }, {})
      ).toString()
      : ''

    return query ? `${href.pathname}?${query}` : href.pathname
  }

  return ''
}

const SmartLink = ({ href, children, ...rest }) => {
  const LINK = siteConfig('LINK')

  // 获取 URL 字符串用于判断是否是外链
  let urlString = ''

  urlString = toHrefString(href)

  const isExternal = urlString.startsWith('http') && !urlString.startsWith(LINK)
  const isForcedAnchor = Boolean(rest.forceAnchor)

  if (isExternal) {
    // 对于外部链接，必须是 string 类型
    const externalUrl =
      typeof href === 'string' ? href : new URL(href.pathname, LINK).toString()

    return (
      <a
        href={externalUrl}
        target='_blank'
        rel='noopener noreferrer'
        {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  if (isForcedAnchor) {
    return (
      <a href={urlString} {...filterDOMProps(rest)}>
        {children}
      </a>
    )
  }

  // 内部链接（可为对象形式）
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}

export default SmartLink
