# `hasUnknownKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/zod-wire.ts` · [Module README](../../../../../modules/shared/parse/zod-wire-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485949-485951](../../../../../../reference/runtime/host-main.cjs#L485949-L485951) | `FunctionDeclaration` | no | `frame, knownKinds` |
| [evaluation:548129-548131](../../../../../../reference/runtime/sand-eval-runner.cjs#L548129-L548131) | `FunctionDeclaration` | no | `frame, knownKinds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485949-485951](../../../../../../reference/runtime/host-main.cjs#L485949-L485951) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548129-548131](../../../../../../reference/runtime/sand-eval-runner.cjs#L548129-L548131) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485949

Calls written directly in this body: `knownKinds.has`.

SHA-256 of the source span: `e7cf442a03c2376c52dff4fdd3cf37e8d9ff094bf2f6d50f04cb27fe141317c2`.

### evaluation:548129

Calls written directly in this body: `knownKinds.has`.

SHA-256 of the source span: `e7cf442a03c2376c52dff4fdd3cf37e8d9ff094bf2f6d50f04cb27fe141317c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
