export class Project {
    public url: string;
    public name: string;
    public description: string;
    public languages: string;
    public year: string;

    constructor(url: string, name: string, desc: string, lang: string, year: string) {
        this.url = url;
        this.name = name;
        this.description = desc;
        this.languages = lang;
        this.year = year;
    }
}