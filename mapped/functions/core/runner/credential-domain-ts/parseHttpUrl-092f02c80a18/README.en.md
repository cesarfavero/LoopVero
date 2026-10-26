# `parseHttpUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546779-546788](../../../../../../reference/runtime/host-main.cjs#L546779-L546788) | `FunctionDeclaration` | no | `raw` |
| [evaluation:481968-481977](../../../../../../reference/runtime/sand-eval-runner.cjs#L481968-L481977) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546779-546788](../../../../../../reference/runtime/host-main.cjs#L546779-L546788) | 3 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:481968-481977](../../../../../../reference/runtime/sand-eval-runner.cjs#L481968-L481977) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:546779

Calls written directly in this body: `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `0a4ca692528eaa54872e0b32bf52a7a5db3df1daae5c44fa5e2603202fdbde6f`.

### evaluation:481968

Calls written directly in this body: `new URL`, `raw.trim`, `value.includes`.

SHA-256 of the source span: `0a4ca692528eaa54872e0b32bf52a7a5db3df1daae5c44fa5e2603202fdbde6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
