# `sourceToolPermission`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687160-687162](../../../../../../reference/runtime/host-main.cjs#L687160-L687162) | `FunctionDeclaration` | no | `args, name18` |
| [evaluation:579281-579283](../../../../../../reference/runtime/sand-eval-runner.cjs#L579281-L579283) | `FunctionDeclaration` | no | `args, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687160-687162](../../../../../../reference/runtime/host-main.cjs#L687160-L687162) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579281-579283](../../../../../../reference/runtime/sand-eval-runner.cjs#L579281-L579283) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:687160

Calls written directly in this body: `args.isDisabled`.

SHA-256 of the source span: `82a1cd2c3015c41ae0ca60a72afdc44c62d7d937fe5035605a9464a751dbcdf9`.

### evaluation:579281

Calls written directly in this body: `args.isDisabled`.

SHA-256 of the source span: `82a1cd2c3015c41ae0ca60a72afdc44c62d7d937fe5035605a9464a751dbcdf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
