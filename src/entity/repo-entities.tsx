export default class RepoEntity {
    id: string;
    name: string;
    fullName: string;
    private: boolean;
    gitUrl: string;
    createdAt: number;
    watchers: number;
    language: string;
    forks: number;
    defaultBranch: string;
    description: string;
}