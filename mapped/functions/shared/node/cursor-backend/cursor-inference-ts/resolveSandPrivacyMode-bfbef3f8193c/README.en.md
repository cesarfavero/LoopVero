# `resolveSandPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224981-224983](../../../../../../../reference/runtime/host-main.cjs#L224981-L224983) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |
| [evaluation:512004-512006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512004-L512006) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224981-224983](../../../../../../../reference/runtime/host-main.cjs#L224981-L224983) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:512004-512006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512004-L512006) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:224981

Calls written directly in this body: `resolveCachedSandPrivacyMode`.

SHA-256 of the source span: `1d3865e9ae748f7949d246b6b0d70b6d816249fcc2beb885fa1837f43c6bfb57`.

### evaluation:512004

Calls written directly in this body: `resolveCachedSandPrivacyMode`.

SHA-256 of the source span: `1d3865e9ae748f7949d246b6b0d70b6d816249fcc2beb885fa1837f43c6bfb57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
