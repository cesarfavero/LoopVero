# `matching`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773966-773968](../../../../../../reference/runtime/host-main.cjs#L773966-L773968) | `FunctionDeclaration` | no | `value, pattern` |
| [evaluation:573181-573183](../../../../../../reference/runtime/sand-eval-runner.cjs#L573181-L573183) | `FunctionDeclaration` | no | `value, pattern` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773966-773968](../../../../../../reference/runtime/host-main.cjs#L773966-L773968) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573181-573183](../../../../../../reference/runtime/sand-eval-runner.cjs#L573181-L573183) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773966

Calls written directly in this body: `pattern.test`.

SHA-256 of the source span: `22e3b4852f6761b71434d37f2910c875ea011bd1bb61caf64febca9d43ab90fb`.

### evaluation:573181

Calls written directly in this body: `pattern.test`.

SHA-256 of the source span: `22e3b4852f6761b71434d37f2910c875ea011bd1bb61caf64febca9d43ab90fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
