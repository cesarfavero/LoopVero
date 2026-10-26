# `withConnectorDraftCardReminder/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/connector-draft-card-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/connector-draft-card-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585552-585572](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585552-L585572) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585552-585572](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585552-L585572) | 5 | 0 | 1 | 4 | 0 | 0 |

### evaluation:585552

Calls written directly in this body: `.toLowerCase`, `CARD_MAILBOXES.get`, `boundedConnectorTag`, `connectorDraftCardReminder`, `connectorDrafts.increment`, `deps.connectors`, `deps.draftCardAvailable`, `deps.resolveServerHost`, `emailConnectorOf`, `executor.execute`, `findConnectorServedOn`, `isCreateDraft`, `restMcpProviderOf`, `withReminder`.

SHA-256 of the source span: `eda999c32764a6166a715ba2ed48c71cc3b6cc893439298def73319614db65e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
