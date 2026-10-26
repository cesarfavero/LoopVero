# `repoReferenceAsUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509098-509109](../../../../../../reference/runtime/host-main.cjs#L509098-L509109) | `FunctionDeclaration` | no | `raw` |
| [evaluation:556851-556862](../../../../../../reference/runtime/sand-eval-runner.cjs#L556851-L556862) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509098-509109](../../../../../../reference/runtime/host-main.cjs#L509098-L509109) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:556851-556862](../../../../../../reference/runtime/sand-eval-runner.cjs#L556851-L556862) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:509098

Calls written directly in this body: `/^[a-z][a-z0-9+.-]*:\/\//i.test`, `new URL`, `raw.trim`, `trimmed.replace`.

SHA-256 of the source span: `41c279f645cee2a47d8823f4af026849b0e8566531893e08293c610caf4f90ce`.

### evaluation:556851

Calls written directly in this body: `/^[a-z][a-z0-9+.-]*:\/\//i.test`, `new URL`, `raw.trim`, `trimmed.replace`.

SHA-256 of the source span: `41c279f645cee2a47d8823f4af026849b0e8566531893e08293c610caf4f90ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
