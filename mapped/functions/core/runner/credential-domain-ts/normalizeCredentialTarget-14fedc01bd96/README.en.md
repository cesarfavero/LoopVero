# `normalizeCredentialTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546802-546805](../../../../../../reference/runtime/host-main.cjs#L546802-L546805) | `FunctionDeclaration` | no | `rawTarget` |
| [evaluation:481991-481994](../../../../../../reference/runtime/sand-eval-runner.cjs#L481991-L481994) | `FunctionDeclaration` | no | `rawTarget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546802-546805](../../../../../../reference/runtime/host-main.cjs#L546802-L546805) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481991-481994](../../../../../../reference/runtime/sand-eval-runner.cjs#L481991-L481994) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:546802

Calls written directly in this body: `isSecureCredentialTarget`, `parseHttpUrl`.

SHA-256 of the source span: `5ee6c2b54b9988a09da568f7d225e0b4574eecb77c9a8d968b0abf6946b1eacd`.

### evaluation:481991

Calls written directly in this body: `isSecureCredentialTarget`, `parseHttpUrl`.

SHA-256 of the source span: `5ee6c2b54b9988a09da568f7d225e0b4574eecb77c9a8d968b0abf6946b1eacd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
