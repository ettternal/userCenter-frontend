import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'Whale倾力打造';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
            key: 'Whale User-Center',
            title: 'Whale User-Center',
            href: 'https://github.com/ettternal',
            blankTarget: true,//表示点击之后是在新页面（true）还是，此页面打开
        },
        {
            key: 'github',
            title: <><GithubOutlined/>Whale github</>,
            href: 'https://github.com/ettternal/Whale-UserCenter',
            blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
