import Image from "next/image"

export default function ProjectItem({data}:any){

    const title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.external.url
    const tags = data.properties.태그.multi_select

    return (
        <div className="project-card">
            <Image src={imgSrc} className="rounded-t-xl" alt="cover image" width={100} height={50} layout="responsive" objectFit="cover" quality={100}/>
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={githubLink}>깃허브 바로가기</a>

                <div className="flex items-start mt-2">
                    {tags.map((aTag:any)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>

        </div>
    )
}