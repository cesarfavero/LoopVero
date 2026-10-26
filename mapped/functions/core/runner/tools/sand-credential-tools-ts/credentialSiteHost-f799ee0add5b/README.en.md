# `credentialSiteHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751799-751805](../../../../../../../reference/runtime/host-main.cjs#L751799-L751805) | `FunctionDeclaration` | no | `raw` |
| [evaluation:524865-524871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524865-L524871) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751799-751805](../../../../../../../reference/runtime/host-main.cjs#L751799-L751805) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:524865-524871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524865-L524871) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:751799

Calls written directly in this body: `new URL`, `raw.includes`.

SHA-256 of the source span: `6019a4bf7044f8789fcf6e939d1af3e36487b3e30273872445f3ec15e5b5d7b9`.

### evaluation:524865

Calls written directly in this body: `new URL`, `raw.includes`.

SHA-256 of the source span: `6019a4bf7044f8789fcf6e939d1af3e36487b3e30273872445f3ec15e5b5d7b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
