# `normalizeNavigationUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699063-699076](../../../../../../reference/runtime/host-main.cjs#L699063-L699076) | `FunctionDeclaration` | no | `rawUrl` |
| [evaluation:512422-512435](../../../../../../reference/runtime/sand-eval-runner.cjs#L512422-L512435) | `FunctionDeclaration` | no | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699063-699076](../../../../../../reference/runtime/host-main.cjs#L699063-L699076) | 3 | 1 | 0 | 5 | 0 | 1 |
| [evaluation:512422-512435](../../../../../../reference/runtime/sand-eval-runner.cjs#L512422-L512435) | 3 | 1 | 0 | 5 | 0 | 1 |

### host:699063

Calls written directly in this body: `new URL`, `rawUrl.trim`, `trimmed.startsWith`.

SHA-256 of the source span: `4db08f9c11a203064d11eb5c5e58dffa227706f6a186429f8537d4e0a9424c63`.

### evaluation:512422

Calls written directly in this body: `new URL`, `rawUrl.trim`, `trimmed.startsWith`.

SHA-256 of the source span: `5254e69bc7ac5071a8540c0ce9d312efdcf0d3fab4a391abfae4b18445b27c7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
