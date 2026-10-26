# `resolveSandBackendAuthContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224995-225004](../../../../../../../reference/runtime/host-main.cjs#L224995-L225004) | `FunctionDeclaration` | yes | `options2` |
| [evaluation:512058-512067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512058-L512067) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224995-225004](../../../../../../../reference/runtime/host-main.cjs#L224995-L225004) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:512058-512067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512058-L512067) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:224995

Calls written directly in this body: `accountScopeOfToken`, `isSentTeamId`, `options2.getTeamId`, `resolverHandedBackAToken`.

SHA-256 of the source span: `25890f10ebb1d38e36480713cdf02133f1d921a298a004984e000cc438297b74`.

### evaluation:512058

Calls written directly in this body: `accountScopeOfToken`, `isSentTeamId`, `options2.getTeamId`, `resolverHandedBackAToken`.

SHA-256 of the source span: `25890f10ebb1d38e36480713cdf02133f1d921a298a004984e000cc438297b74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
