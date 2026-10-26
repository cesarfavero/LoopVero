# `messageLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-thread-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765025-765067](../../../../../../../reference/runtime/host-main.cjs#L765025-L765067) | `FunctionDeclaration` | no | `message, index` |
| [evaluation:558393-558435](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558393-L558435) | `FunctionDeclaration` | no | `message, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765025-765067](../../../../../../../reference/runtime/host-main.cjs#L765025-L765067) | 14 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558393-558435](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558393-L558435) | 14 | 0 | 0 | 1 | 0 | 0 |

### host:765025

Calls written directly in this body: `.trimEnd`, `attachmentLines`, `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `message.deliveryState.toLowerCase`, `message.subject.trim`, `meta3.join`, `meta3.push`, `verifyInlineImageMarkers`.

SHA-256 of the source span: `cb4ad26e3f343b8c8cce7e215373f35b1fa906125420914f164ae78fb061d072`.

### evaluation:558393

Calls written directly in this body: `.trimEnd`, `attachmentLines`, `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `message.deliveryState.toLowerCase`, `message.subject.trim`, `meta3.join`, `meta3.push`, `verifyInlineImageMarkers`.

SHA-256 of the source span: `cb4ad26e3f343b8c8cce7e215373f35b1fa906125420914f164ae78fb061d072`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
