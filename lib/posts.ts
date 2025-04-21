import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
    // Lê os nomes dos arquivos dentro do diretório de posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" do nome do arquivo para obter o ID
        const id = fileName.replace(/\.md$/, '');

        // Lê o conteúdo do arquivo markdown
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Usa gray-matter para analisar os metadados do post
        const matterResult = matter(fileContents);

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            desc: matterResult.data.desc,
            image: matterResult.data.image,
        };
    });

    // Função para converter a data no formato "dia de mês de ano"
    const parseDate = (dateString: string) => {
        const [day, month, year] = dateString.split(' de ');
        
        const monthMap: { [key: string]: number } = {
            janeiro: 0,
            fevereiro: 1,
            março: 2,
            abril: 3,
            maio: 4,
            junho: 5,
            julho: 6,
            agosto: 7,
            setembro: 8,
            outubro: 9,
            novembro: 10,
            dezembro: 11,
        };

        const monthIndex = monthMap[month.toLowerCase()];
        return new Date(Number(year), monthIndex, Number(day));
    };

    // Ordena os posts pela data (mais recente primeiro)
    return allPostsData.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

export async function getPostData(id: string) {
    // Constrói o caminho completo para o arquivo markdown
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa gray-matter para analisar a seção de metadados do post
    const matterResult = matter(fileContents);

    // Converte o conteúdo markdown em HTML usando remark
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        desc: matterResult.data.desc,
        image: matterResult.data.image,
        contentHtml,
    };
}
