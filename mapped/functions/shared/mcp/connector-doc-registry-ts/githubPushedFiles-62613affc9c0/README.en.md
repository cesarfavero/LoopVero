# `githubPushedFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774117-774131](../../../../../../reference/runtime/host-main.cjs#L774117-L774131) | `FunctionDeclaration` | no | `args` |
| [evaluation:573332-573346](../../../../../../reference/runtime/sand-eval-runner.cjs#L573332-L573346) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774117-774131](../../../../../../reference/runtime/host-main.cjs#L774117-L774131) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573332-573346](../../../../../../reference/runtime/sand-eval-runner.cjs#L573332-L573346) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774117

Calls written directly in this body: `Array.isArray`, `files.flatMap`, `matching`, `stringArg2`.

SHA-256 of the source span: `9d86b087c836d4c7fcdc93c44ce1d935244946871fad5e472b8210c45f5d5b8b`.

### evaluation:573332

Calls written directly in this body: `Array.isArray`, `files.flatMap`, `matching`, `stringArg2`.

SHA-256 of the source span: `e95d31d789f22d87e0a1d5b103267e05e2680db47703a3a5db3f041a489f517e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
