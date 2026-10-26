# `sanitizeHeaderValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/request-lineage.ts` · [Module README](../../../../../modules/shared/observability/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:216804-216806](../../../../../../reference/runtime/host-main.cjs#L216804-L216806) | `FunctionDeclaration` | no | `value` |
| [evaluation:511655-511657](../../../../../../reference/runtime/sand-eval-runner.cjs#L511655-L511657) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:216804-216806](../../../../../../reference/runtime/host-main.cjs#L216804-L216806) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511655-511657](../../../../../../reference/runtime/sand-eval-runner.cjs#L511655-L511657) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:216804

Calls written directly in this body: `value.replace`.

SHA-256 of the source span: `931eb6bf59728b400b7934d015a3a0313ac42e260f5b439d5f20b301fb3e144b`.

### evaluation:511655

Calls written directly in this body: `value.replace`.

SHA-256 of the source span: `931eb6bf59728b400b7934d015a3a0313ac42e260f5b439d5f20b301fb3e144b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
