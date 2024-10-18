import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';

const theme = createTheme();
const featuredPosts = [
  {
    title: 'お金持ちになれる黄金の羽根の拾い方',
    subtitle: '知的人生設計のすすめ',
    author: '橘玲',
    description: '自由な人生を誰もが願う。国、会社、家族に依存せず生きるには経済的独立すなわち十分な資産が必要だ。1億円の資産保有を経済的独立とすれば欧米や日本では特別な才は要らず勤勉と倹約それに共稼ぎで目標に到達する。黄金の羽根とは制度の歪みがもたらす幸運のこと。手に入れると大きな利益を得る。誰でもできる「人生の利益の最大化」とその方法。',
    image: 'http://books.google.com/books/content?id=aak7swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    date: '2017-08',
  },
  {
    title: 'お金持ちになれる黄金の羽根の拾い方　知的人生設計入門',
    subtitle: '知的人生設計のすすめ',
    author: '橘玲',
    description: '自由な人生を誰もが願う。国、会社、家族に依存せず生きるには経済的独立すなわち十分な資産が必要だ。1億円の資産保有を経済的独立とすれば欧米や日本では特別な才は要らず勤勉と倹約それに共稼ぎで目標に到達する。黄金の羽根とは制度の歪みがもたらす幸運のこと。手に入れると大きな利益を得る。誰でもできる「人生の利益の最大化」とその方法。',
    image: 'http://books.google.com/books/content?id=Qbu5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    date: '2017-08',
  },
  {
    title: '多動力',
    subtitle: '',
    author: '堀江貴文',
    description: '石の上にも三年」「真面目にコツコツ」が評価される時代は終わった――。インターネットの到来で、ありとあらゆるモノがつながった今、次から次に自分が好きなことをハシゴしまくる「多動力」を持った人間が求められている。一度に大量の仕事をこなす術から、１秒残らず人生を楽しみきるためのヒントまで。堀江貴文ビジネス書の決定版！',
    image: 'http://books.google.com/books/content?id=AXu5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"',
    date: '2017-08',
  },
];
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 7
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Libraryとは
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph >
              My Libraryは、本の感想や評価をチェックしたり、webやアプリで本棚をかんたんに作成し、
              感想やレビューを書いたり、読書の管理・記録をすることができます。
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          <Typography variant="h6" align="center" color="text.secondary" paragraph >
            お気に入り
          </Typography>
          <Grid container xs={12} spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}