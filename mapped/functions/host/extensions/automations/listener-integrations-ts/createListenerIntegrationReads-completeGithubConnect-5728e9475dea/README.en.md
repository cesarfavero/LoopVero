# `createListenerIntegrationReads/completeGithubConnect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505533-505565](../../../../../../../reference/runtime/host-main.cjs#L505533-L505565) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505533-505565](../../../../../../../reference/runtime/host-main.cjs#L505533-L505565) | 5 | 0 | 1 | 6 | 0 | 1 |

### host:505533

Calls written directly in this body: `.completeGithubConnectFlow`, `dashboard`, `deps.log`, `errorLogTag`, `new CompleteGithubConnectFlowRequest`, `verifierByMintedState.delete`, `verifierByMintedState.get`.

Assignment or increment targets: `response`.

SHA-256 of the source span: `3baeadd6ef032a7a281f587a44461d27c09912d7afd54726de59f09a37e0206d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
