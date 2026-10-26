# `botTemplateShareRefusalReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771095-771113](../../../../../../../reference/runtime/host-main.cjs#L771095-L771113) | `FunctionDeclaration` | no | `error64` |
| [evaluation:570329-570347](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570329-L570347) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771095-771113](../../../../../../../reference/runtime/host-main.cjs#L771095-L771113) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:570329-570347](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570329-L570347) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:771095

Calls written directly in this body: `PUBLIC_SHARING_DISABLED_MARKERS.some`, `String`, `error64.metadata.get`, `message.includes`.

SHA-256 of the source span: `da51eacf7a383cdde09da0ea8ec160dffe5f6f7051edee30df7c8a4a04cb2b1c`.

### evaluation:570329

Calls written directly in this body: `PUBLIC_SHARING_DISABLED_MARKERS.some`, `String`, `error63.metadata.get`, `message.includes`.

SHA-256 of the source span: `37073bf3601b8551c6b5974b23fc5f41cfcdc040d2385353546e2b5a0d96019c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
