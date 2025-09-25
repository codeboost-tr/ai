import { APIKeys } from './admin/APIKeys'
import { Config } from './admin/Config'
import { Roles } from './admin/Roles'
import { Tags } from './admin/Tag'
import { Users } from './admin/Users'
import { Webhooks } from './admin/Webhooks'
import { Agents } from './ai/Agents'
import { Functions } from './ai/Functions'
import { Workflows } from './ai/Workflows'
import { OAuthClients } from './auth/OAuthClients'
import { OAuthCodes } from './auth/OAuthCodes'
import { OAuthTokens } from './auth/OAuthTokens'
import { BillingPlans } from './billing/BillingPlans'
import { ConnectAccounts } from './billing/ConnectAccounts'
import { Organizations } from './billing/Organizations'
import { Services } from './billing/Services'
import { Subscriptions } from './billing/Subscriptions'
import { Usage } from './billing/Usage'
import { Goals } from './business/Goals'
import { KPIs } from './business/KPIs'
import { Plans } from './business/Plans'
import { Queues } from './business/Queues'
import { Tasks } from './business/Tasks'
import { Deployments } from './code/Deployments'
import { Modules } from './code/Modules'
import { Packages } from './code/Packages'
import { Types } from './code/Types'
import { Nouns } from './data/Nouns'
import { Relationships } from './data/Relationships'
import { Resources } from './data/Resources'
import { Verbs } from './data/Verbs'
import { Benchmarks } from './evals/Benchmarks'
import { Datasets } from './evals/Datasets'
import { Evals } from './evals/Evals'
import { EvalsResults } from './evals/EvalsResults'
import { EvalsRuns } from './evals/EvalsRuns'
import { Actions } from './events/Actions'
import { Searches } from './events/Searches'
import { Triggers } from './events/Triggers'
import { ExperimentMetrics } from './experiments/ExperimentMetrics'
import { Experiments } from './experiments/Experiments'
import { Files } from './experiments/Files'
import { Labs } from './experiments/Labs'
import { Models } from './experiments/Models'
import { Prompts } from './experiments/Prompts'
import { Providers } from './experiments/Providers'
import { Settings } from './experiments/Settings'
import { Variants } from './experiments/Variants'
import { Connections } from './integrations/Connections'
import { IntegrationActions } from './integrations/IntegrationActions'
import { IntegrationCategories } from './integrations/IntegrationCategories'
import { Integrations } from './integrations/Integrations'
import { IntegrationTriggers } from './integrations/IntegrationTriggers'
import { ChatResources } from './observability/Chats'
import { Errors } from './observability/Errors'
import { Events } from './observability/Events'
import { GenerationBatches } from './observability/GenerationBatches'
import { Generations } from './observability/Generations'
import { Traces } from './observability/Traces'
import { Databases } from './projects/Databases'
import { Domains } from './projects/Domains'
import { Projects } from './projects/Projects'
import { Waitlist } from './projects/Waitlist'

export const collections = [
  // Register AI collections first
  Functions,
  Workflows,
  Agents,
  Services,

  // Work-related collections
  Queues,
  Tasks,
  Goals,
  Plans,

  // Admin collections
  Waitlist,

  // Data & definitions
  Nouns,
  Verbs,
  Databases,
  Resources,
  ChatResources,
  Relationships,

  // Integration collections
  IntegrationCategories,
  Integrations,
  ConnectAccounts,
  Connections,
  IntegrationTriggers,
  IntegrationActions,

  // Event collections
  Triggers,
  Searches,
  Actions,

  Experiments,
  ExperimentMetrics,
  Variants,
  Models,
  Providers,
  Labs,
  Prompts,
  Settings,
  Files,

  Types,
  Modules,
  Packages,
  Deployments,

  Benchmarks,
  Evals,
  EvalsRuns,
  EvalsResults,
  Datasets,

  Events,
  Errors,
  Generations,
  GenerationBatches,
  Traces,
  KPIs,

  // Billing collections
  Organizations,
  BillingPlans,
  Subscriptions,
  Usage,

  Config,

  Projects,
  Domains,
  Users,
  Roles,
  Tags,
  Webhooks,
  APIKeys,

  // Infrastructure collections

  OAuthClients,
  OAuthCodes,
  OAuthTokens,
]

export const collectionSlugs = collections.map((collection) => collection.slug)
