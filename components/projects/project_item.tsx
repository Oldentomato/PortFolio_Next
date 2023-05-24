import Image from "next/image"

export default function ProjectItem({data}:any){

    const title = data.properties.이름.title[0].plain_text
    const githubLink = data.properties.Github.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.태그.multi_select
    const startDate = data.properties.날짜.date.start
    const endDate = data.properties.날짜.date.end

    const calculatedPeriod = (start:string,end:string):Number =>{
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(Number(startDateStringArray[0]) , Number(startDateStringArray[1]), Number(startDateStringArray[2]));
        var endDate = new Date(Number(endDateStringArray[0]) , Number(endDateStringArray[1]), Number(endDateStringArray[2]));

        const diffInMs = Math.abs(Number(endDate) - Number(startDate));
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;
    }

    return (
        <div className="project-card">
            <Image src={imgSrc} className="rounded-t-xl" alt="cover image" width={40} height={40} layout="responsive" objectFit="cover" quality={100}/>
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={githubLink}>깃허브 바로가기</a>
                <h3 className="mt-4">
                    작업기간 : {startDate} ~ {endDate} ({calculatedPeriod(startDate,endDate)}일)
                    </h3>

                <div className="flex items-start mt-2">
                    {tags.map((aTag:any)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>

        </div>
    )
}