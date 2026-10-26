# `signedGmailBodies`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732858-732868](../../../../../../../reference/runtime/host-main.cjs#L732858-L732868) | `FunctionDeclaration` | no | `route, draft, options2` |
| [evaluation:540380-540390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540380-L540390) | `FunctionDeclaration` | no | `route, draft, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732858-732868](../../../../../../../reference/runtime/host-main.cjs#L732858-L732868) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540380-540390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540380-L540390) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732858

Calls written directly in this body: `cardHtmlBody`, `signatureText`.

SHA-256 of the source span: `fa5954f4c7a243dd3f457211f32095fb1352921e342731177eddfd413fd5cc15`.

### evaluation:540380

Calls written directly in this body: `cardHtmlBody`, `signatureText`.

SHA-256 of the source span: `fa5954f4c7a243dd3f457211f32095fb1352921e342731177eddfd413fd5cc15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
