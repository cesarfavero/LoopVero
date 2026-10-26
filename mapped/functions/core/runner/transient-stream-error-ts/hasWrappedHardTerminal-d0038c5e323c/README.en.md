# `hasWrappedHardTerminal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736318-736332](../../../../../../reference/runtime/host-main.cjs#L736318-L736332) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:590010-590024](../../../../../../reference/runtime/sand-eval-runner.cjs#L590010-L590024) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736318-736332](../../../../../../reference/runtime/host-main.cjs#L736318-L736332) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:590010-590024](../../../../../../reference/runtime/sand-eval-runner.cjs#L590010-L590024) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736318

Calls written directly in this body: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasWrappedHardTerminal`, `seen.add`, `seen.has`.

SHA-256 of the source span: `f1ad37dc2162182d3d1287b3e5763523c44a01d90efc4223fb0e4d3006894953`.

### evaluation:590010

Calls written directly in this body: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasWrappedHardTerminal`, `seen.add`, `seen.has`.

SHA-256 of the source span: `0ebd1da5e9865083b2343cf656a89bb5dbcecbec3f43e0b681969530e50ecbfb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
