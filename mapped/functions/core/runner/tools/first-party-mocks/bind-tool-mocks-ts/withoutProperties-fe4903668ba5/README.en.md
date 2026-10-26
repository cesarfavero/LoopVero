# `withoutProperties`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555865-555876](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555865-L555876) | `FunctionDeclaration` | no | `schema3, keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555865-555876](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555865-L555876) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:555865

Calls written directly in this body: `.filter`, `Object.entries`, `Object.fromEntries`, `new Set`, `objectSchema2.safeParse`, `parsed.data.required.filter`.

SHA-256 of the source span: `cc4186a6c37806cfcaedad3eb3732fe6171e3d1cf050ad3a7e97f7c0de845037`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
