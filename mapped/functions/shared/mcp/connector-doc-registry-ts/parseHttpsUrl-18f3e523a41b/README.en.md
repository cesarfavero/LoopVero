# `parseHttpsUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774494-774498](../../../../../../reference/runtime/host-main.cjs#L774494-L774498) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573730-573734](../../../../../../reference/runtime/sand-eval-runner.cjs#L573730-L573734) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774494-774498](../../../../../../reference/runtime/host-main.cjs#L774494-L774498) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573730-573734](../../../../../../reference/runtime/sand-eval-runner.cjs#L573730-L573734) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774494

Calls written directly in this body: `URL.canParse`, `new URL`, `raw.trim`.

SHA-256 of the source span: `b8c2388258f8284daab545609cdd259f3e89ffc5a5fa0eaba75d916eb35771d7`.

### evaluation:573730

Calls written directly in this body: `URL.canParse`, `new URL`, `raw.trim`.

SHA-256 of the source span: `b8c2388258f8284daab545609cdd259f3e89ffc5a5fa0eaba75d916eb35771d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
