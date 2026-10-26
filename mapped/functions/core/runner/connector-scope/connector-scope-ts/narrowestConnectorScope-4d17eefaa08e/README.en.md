# `narrowestConnectorScope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-scope/connector-scope.ts` · [Module README](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525841-525863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525841-L525863) | `FunctionDeclaration` | no | `scopes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525841-525863](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525841-L525863) | 4 | 1 | 0 | 5 | 0 | 0 |

### evaluation:525841

Calls written directly in this body: `.filter`, `JSON.stringify`, `Object.fromEntries`, `common2.map`, `others.push`, `rest.every`, `scopes.flatMap`, `serverConfigsOf`.

SHA-256 of the source span: `8de91af0287a419a411f13f982109f77bb07869ab2c7e383ccb44dfb6f0347f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
