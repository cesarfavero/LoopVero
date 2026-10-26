# `mockCallFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555961-555968](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555961-L555968) | `FunctionDeclaration` | no | `target, calledArgs, alias2, mockSchemas, unmocked` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555961-555968](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555961-L555968) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:555961

Calls written directly in this body: `isLegacyStateToolName`, `mockSchemas.has`, `withoutKeys`.

SHA-256 of the source span: `6d8057fed76d96523b383203f696305b419086703a1996d1c7ea228efd0dc038`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
