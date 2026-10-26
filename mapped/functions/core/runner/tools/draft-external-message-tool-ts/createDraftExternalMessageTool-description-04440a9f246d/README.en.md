# `createDraftExternalMessageTool/description`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755420-755423](../../../../../../../reference/runtime/host-main.cjs#L755420-L755423) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:541300-541303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541300-L541303) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755420-755423](../../../../../../../reference/runtime/host-main.cjs#L755420-L755423) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541300-541303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541300-L541303) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755420

Calls written directly in this body: `deps.draftByDefault`.

SHA-256 of the source span: `e9841b4035744938fd46d283e5af9703aea57000e8dd3b246069e76c5de6e71a`.

### evaluation:541300

Calls written directly in this body: `deps.draftByDefault`.

SHA-256 of the source span: `e9841b4035744938fd46d283e5af9703aea57000e8dd3b246069e76c5de6e71a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
