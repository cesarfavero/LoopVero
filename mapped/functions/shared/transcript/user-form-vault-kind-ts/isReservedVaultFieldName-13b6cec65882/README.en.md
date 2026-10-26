# `isReservedVaultFieldName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/user-form-vault-kind.ts` · [Module README](../../../../../modules/shared/transcript/user-form-vault-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724391-724393](../../../../../../reference/runtime/host-main.cjs#L724391-L724393) | `FunctionDeclaration` | no | `name18` |
| [evaluation:550149-550151](../../../../../../reference/runtime/sand-eval-runner.cjs#L550149-L550151) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724391-724393](../../../../../../reference/runtime/host-main.cjs#L724391-L724393) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550149-550151](../../../../../../reference/runtime/sand-eval-runner.cjs#L550149-L550151) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724391

Calls written directly in this body: `VAULT_FIELD_NAME_PREFIXES.some`.

SHA-256 of the source span: `c9db3997c3961b9865a79a49d25aa0b367b36fca08ad92f380734c528fc7fa18`.

### evaluation:550149

Calls written directly in this body: `VAULT_FIELD_NAME_PREFIXES.some`.

SHA-256 of the source span: `c9db3997c3961b9865a79a49d25aa0b367b36fca08ad92f380734c528fc7fa18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
