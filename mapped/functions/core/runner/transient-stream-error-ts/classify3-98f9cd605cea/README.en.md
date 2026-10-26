# `classify3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589898-589913](../../../../../../reference/runtime/sand-eval-runner.cjs#L589898-L589913) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589898-589913](../../../../../../reference/runtime/sand-eval-runner.cjs#L589898-L589913) | 7 | 0 | 0 | 8 | 0 | 0 |

### evaluation:589898

Calls written directly in this body: `Array.isArray`, `TRANSIENT_ERRNO_CODES.has`, `classify3`, `fields3.code.toUpperCase`, `fields3.errors.some`, `messageLooksTransient`, `seen.add`, `seen.has`.

SHA-256 of the source span: `e62b1a6d1f59175c8be4f492faa0ab85b259420280b592ec490280f721721977`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
