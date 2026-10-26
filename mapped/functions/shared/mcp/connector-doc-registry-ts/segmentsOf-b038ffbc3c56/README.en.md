# `segmentsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773960-773962](../../../../../../reference/runtime/host-main.cjs#L773960-L773962) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573175-573177](../../../../../../reference/runtime/sand-eval-runner.cjs#L573175-L573177) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773960-773962](../../../../../../reference/runtime/host-main.cjs#L773960-L773962) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573175-573177](../../../../../../reference/runtime/sand-eval-runner.cjs#L573175-L573177) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773960

Calls written directly in this body: `.filter`, `url2.pathname.split`.

SHA-256 of the source span: `4ce032777287e3461909c0afa80ab03b3dabcc125824f9491c43731129a7feab`.

### evaluation:573175

Calls written directly in this body: `.filter`, `url2.pathname.split`.

SHA-256 of the source span: `4ce032777287e3461909c0afa80ab03b3dabcc125824f9491c43731129a7feab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
