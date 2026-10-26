# `src/shared/proto.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/proto.ts` · [Module README](../../../../modules/shared/proto-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:215200-215343](../../../../../reference/runtime/host-main.cjs#L215200-L215343) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:215200-215343](../../../../../reference/runtime/host-main.cjs#L215200-L215343) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:215200

Calls written directly in this body: `init_agent_pb`, `init_agent_store_connect`, `init_aiserver_connect`, `init_aiserver_pb`, `init_analytics_connect`, `init_analytics_pb`, `init_background_composer_connect`, `init_background_composer_pb`, `init_chat_pb`, `init_dashboard_connect`, `init_dashboard_pb`, `init_default_main_agent_outcome`, `init_grok_bot_connect`, `init_grok_bot_pb`, `init_mcp_exec_pb`, `init_privacy_mode_pb`, `init_todo_tool_pb`, `init_utils_pb`.

Assignment or increment targets: `AgentStoreService2`, `AiService2`, `BackgroundComposerService2`, `DashboardService2`.

SHA-256 of the source span: `27a0645e8b21ac0dd5a0747e89c6883c3b4bbaa977af42fda8593ca448328b25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
