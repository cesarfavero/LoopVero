# `cardHtmlBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732829-732832](../../../../../../../reference/runtime/host-main.cjs#L732829-L732832) | `FunctionDeclaration` | no | `route, draft, options2` |
| [evaluation:540351-540354](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540351-L540354) | `FunctionDeclaration` | no | `route, draft, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732829-732832](../../../../../../../reference/runtime/host-main.cjs#L732829-L732832) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540351-540354](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540351-L540354) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732829

Calls written directly in this body: `emailDraftHtmlBody`, `emailHtmlNonTextTag`, `sameBodyText`.

SHA-256 of the source span: `9720c9c329415a56c3c2ecebfd8885af3426ae803889462d2ed9e2515c006f09`.

### evaluation:540351

Calls written directly in this body: `emailDraftHtmlBody`, `emailHtmlNonTextTag`, `sameBodyText`.

SHA-256 of the source span: `9720c9c329415a56c3c2ecebfd8885af3426ae803889462d2ed9e2515c006f09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
