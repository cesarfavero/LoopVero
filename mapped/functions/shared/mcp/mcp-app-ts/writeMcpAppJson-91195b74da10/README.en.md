# `writeMcpAppJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486857-486865](../../../../../../reference/runtime/host-main.cjs#L486857-L486865) | `FunctionDeclaration` | no | `value` |
| [evaluation:495178-495186](../../../../../../reference/runtime/sand-eval-runner.cjs#L495178-L495186) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486857-486865](../../../../../../reference/runtime/host-main.cjs#L486857-L486865) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:495178-495186](../../../../../../reference/runtime/sand-eval-runner.cjs#L495178-L495186) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:486857

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `ba2df039239e6d81b427f4635ed046a12d63fff99de79f9d785f3f90a619da24`.

### evaluation:495178

Calls written directly in this body: `JSON.stringify`.

SHA-256 of the source span: `ba2df039239e6d81b427f4635ed046a12d63fff99de79f9d785f3f90a619da24`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
