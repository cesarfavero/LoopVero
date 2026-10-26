# `connectorDocRefFromUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774499-774503](../../../../../../reference/runtime/host-main.cjs#L774499-L774503) | `FunctionDeclaration` | no | `connector, raw` |
| [evaluation:573735-573739](../../../../../../reference/runtime/sand-eval-runner.cjs#L573735-L573739) | `FunctionDeclaration` | no | `connector, raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774499-774503](../../../../../../reference/runtime/host-main.cjs#L774499-L774503) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573735-573739](../../../../../../reference/runtime/sand-eval-runner.cjs#L573735-L573739) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774499

Calls written directly in this body: `parse17`, `parseHttpsUrl`, `toRef`.

SHA-256 of the source span: `f528d34aaed8638ea74000ff9d5a5b0dbce81e0636f2fcd741b17cd07dfd6a0c`.

### evaluation:573735

Calls written directly in this body: `parse16`, `parseHttpsUrl`, `toRef`.

SHA-256 of the source span: `5833bf5c84705d01923685e08b4bbcc9eca005d6d3b379789c35617f60db672a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
