# `dedupe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:574045-574052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574045-L574052) | `FunctionDeclaration` | no | `refs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:574045-574052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574045-L574052) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:574045

Calls written directly in this body: `byKey.get`, `byKey.set`, `byKey.values`, `new Map`, `preferConnectorDocRef`.

SHA-256 of the source span: `cfc4480a9a549f8131296a91d4106e9a0ac30a6d5f1e52778c5543a6aff73098`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
