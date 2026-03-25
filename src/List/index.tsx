import React from 'react';
import { List, Avatar, Badge, Tag } from 'antd';
import type { ListProps } from 'antd';

export interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  tag: 'info' | 'warning' | 'success' | 'error';
  avatar: string;
}

const TAG_COLOR: Record<NotificationItem['tag'], string> = {
  info: 'blue',
  warning: 'orange',
  success: 'green',
  error: 'red',
};

const TAG_LABEL: Record<NotificationItem['tag'], string> = {
  info: '通知',
  warning: '警告',
  success: '成功',
  error: '错误',
};

const DEFAULT_DATA: NotificationItem[] = [
  {
    id: 1,
    title: '系统升级通知',
    description: '系统将于今晚 22:00 进行例行维护，预计持续 2 小时，请提前保存您的工作。',
    time: '10 分钟前',
    read: false,
    tag: 'warning',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
  {
    id: 2,
    title: '您的订单已发货',
    description: '订单 #20260324-001 已由顺丰快递揽件，预计明日送达，请注意查收。',
    time: '1 小时前',
    read: false,
    tag: 'success',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
  },
  {
    id: 3,
    title: '安全登录提醒',
    description: '检测到您的账号在 iPhone 15 Pro (iOS 18) 上完成新设备登录，若非本人操作请立即修改密码。',
    time: '3 小时前',
    read: true,
    tag: 'error',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
  },
  {
    id: 4,
    title: '每日报表已生成',
    description: '2026-03-23 的销售日报已生成，点击查看详细数据分析。',
    time: '昨天 09:00',
    read: true,
    tag: 'info',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=4',
  },
  {
    id: 5,
    title: '新评论提醒',
    description: '用户「陈小明」回复了您的文章《2026 前端趋势》，快去看看吧。',
    time: '昨天 14:30',
    read: true,
    tag: 'info',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=5',
  },
];

export interface NotificationListProps
  extends Omit<ListProps<NotificationItem>, 'dataSource' | 'renderItem'> {
  data?: NotificationItem[];
  onItemClick?: (item: NotificationItem) => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  data = DEFAULT_DATA,
  onItemClick,
  ...rest
}) => {
  return (
    <List<NotificationItem>
      itemLayout="horizontal"
      dataSource={data}
      style={{ background: '#fff', borderRadius: 8, padding: '0 16px' }}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          style={{ cursor: 'pointer', opacity: item.read ? 0.55 : 1 }}
          onClick={() => onItemClick?.(item)}
          extra={
            <span style={{ fontSize: 12, color: '#999', whiteSpace: 'nowrap' }}>
              {item.time}
            </span>
          }
        >
          <List.Item.Meta
            avatar={
              <Badge dot={!item.read} offset={[-4, 4]}>
                <Avatar src={item.avatar} size={40} />
              </Badge>
            }
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Tag color={TAG_COLOR[item.tag]}>{TAG_LABEL[item.tag]}</Tag>
                {item.title}
              </span>
            }
            description={item.description}
          />
        </List.Item>
      )}
      {...rest}
    />
  );
};
