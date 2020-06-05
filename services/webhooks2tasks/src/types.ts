/**
 * Webhook related types for incoming Events
 */

export interface removeData {
  projectName: string,
  pullrequestNumber?: number,
  pullrequestTitle?: string,
  forceDeleteProductionEnvironment?: boolean,
  branchName?: string,
  branch?: string,
  pullrequest?: string,
  type: string
};

export interface deployData {
  projectName: string,
  branchName: string,
  sha?: string,
  repoUrl?: string,
  repoName?: string,
  pullrequestTitle?: string,
  pullrequestNumber?: number,
  pullrequestUrl?: string,
  type?: string,
  headBranchName?: string,
  headSha?: string,
  baseBranchName?: string,
  baseSha?: string,
};

export interface WebhookRequestData {
  webhooktype: string,
  event: string,
  giturl: string,
  uuid?: string,
  body?: any,
  user?: any,
  sender?: any
};

export interface Project {
  slack: any,
  name: string,
  openshift: any,
  productionEnvironment?: string
};
