# `refineLinkItems`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741471-741513](../../../../../../../reference/runtime/host-main.cjs#L741471-L741513) | `FunctionDeclaration` | no | `items, ctx` |
| [evaluation:482418-482460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482418-L482460) | `FunctionDeclaration` | no | `items, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741471-741513](../../../../../../../reference/runtime/host-main.cjs#L741471-L741513) | 6 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:482418-482460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482418-L482460) | 6 | 1 | 0 | 0 | 0 | 0 |

### host:741471

Calls written directly in this body: `ISO_4217_CURRENCIES.has`, `Number.isFinite`, `ctx.addIssue`, `items.entries`, `new Set`, `parseLinkItemUrl`, `seen.add`, `seen.has`.

SHA-256 of the source span: `43d184f50eceb085ee38acfe8056a7ce2daeeb323bc196c00fe872e6867c9cc7`.

### evaluation:482418

Calls written directly in this body: `ISO_4217_CURRENCIES.has`, `Number.isFinite`, `ctx.addIssue`, `items.entries`, `new Set`, `parseLinkItemUrl`, `seen.add`, `seen.has`.

SHA-256 of the source span: `eb07646ad3f61c510ecf5c4ceef92fb86443b8b1dae777c0eb6d51aec7b50cc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
