# `findDuplicateAccountSlots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/duplicate-account-guard.ts` · [Module README](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779401-779417](../../../../../../reference/runtime/host-main.cjs#L779401-L779417) | `FunctionDeclaration` | no | `servers, request5` |
| [evaluation:579574-579590](../../../../../../reference/runtime/sand-eval-runner.cjs#L579574-L579590) | `FunctionDeclaration` | no | `servers, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779401-779417](../../../../../../reference/runtime/host-main.cjs#L779401-L779417) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:579574-579590](../../../../../../reference/runtime/sand-eval-runner.cjs#L579574-L579590) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:779401

Calls written directly in this body: `.filter`, `.map`, `.sort`, `.toLowerCase`, `accountKeys.add`, `accountKeysByIdentity.get`, `accountKeysByIdentity.set`, `accountKeysByIdentity.values`, `new Map`, `new Set`, `normalizeMcpAccountLabel`, `servers.filter`, `slot.accountEmail.trim`, `slots.some`.

SHA-256 of the source span: `993ad138ad7c616459cd715dce4d38e4c91689ba2215e040b60e0adf478b3526`.

### evaluation:579574

Calls written directly in this body: `.filter`, `.map`, `.sort`, `.toLowerCase`, `accountKeys.add`, `accountKeysByIdentity.get`, `accountKeysByIdentity.set`, `accountKeysByIdentity.values`, `new Map`, `new Set`, `normalizeMcpAccountLabel`, `servers.filter`, `slot.accountEmail.trim`, `slots.some`.

SHA-256 of the source span: `08ad9ec96bc20f8f03c56e232dd195b51ef4b707e94bb8c98aaeff231fb42efc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
