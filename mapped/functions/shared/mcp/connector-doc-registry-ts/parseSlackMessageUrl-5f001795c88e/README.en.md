# `parseSlackMessageUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774137-774143](../../../../../../reference/runtime/host-main.cjs#L774137-L774143) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573352-573358](../../../../../../reference/runtime/sand-eval-runner.cjs#L573352-L573358) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774137-774143](../../../../../../reference/runtime/host-main.cjs#L774137-L774143) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573352-573358](../../../../../../reference/runtime/sand-eval-runner.cjs#L573352-L573358) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:774137

Calls written directly in this body: `/^p\d{16}$/.test`, `matching`, `segmentsOf`.

SHA-256 of the source span: `57ef9a5f1a8c1f30f67223804559bea3a4311ba846584ca1edcd2f57dc57ca98`.

### evaluation:573352

Calls written directly in this body: `/^p\d{16}$/.test`, `matching`, `segmentsOf`.

SHA-256 of the source span: `57ef9a5f1a8c1f30f67223804559bea3a4311ba846584ca1edcd2f57dc57ca98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
