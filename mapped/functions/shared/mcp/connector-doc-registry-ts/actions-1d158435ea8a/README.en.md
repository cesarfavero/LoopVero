# `actions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774211-774213](../../../../../../reference/runtime/host-main.cjs#L774211-L774213) | `FunctionDeclaration` | no | `action, tools, kind = "document"` |
| [evaluation:573426-573428](../../../../../../reference/runtime/sand-eval-runner.cjs#L573426-L573428) | `FunctionDeclaration` | no | `action, tools, kind = "document"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774211-774213](../../../../../../reference/runtime/host-main.cjs#L774211-L774213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573426-573428](../../../../../../reference/runtime/sand-eval-runner.cjs#L573426-L573428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774211

Calls written directly in this body: `Object.fromEntries`, `tools.map`.

SHA-256 of the source span: `fbb7cc642d7a6e46549e788fdd92989b1368795520a09725a3d6b77534f16c6f`.

### evaluation:573426

Calls written directly in this body: `Object.fromEntries`, `tools.map`.

SHA-256 of the source span: `fbb7cc642d7a6e46549e788fdd92989b1368795520a09725a3d6b77534f16c6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
