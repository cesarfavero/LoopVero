# `applyArgumentAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777578-777591](../../../../../../../../reference/runtime/host-main.cjs#L777578-L777591) | `FunctionDeclaration` | no | `value, spec, enabled, ctx` |
| [evaluation:577273-577286](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577273-L577286) | `FunctionDeclaration` | no | `value, spec, enabled, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777578-777591](../../../../../../../../reference/runtime/host-main.cjs#L777578-L777591) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:577273-577286](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577273-L577286) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:777578

Calls written directly in this body: `Object.entries`, `aliases.join`, `aliases.map`, `enabled`, `isUnknownRecord2`, `new Set`, `refuseConflictingAliases`, `reportShim`, `spec.aliases.filter`, `spec.shim.applied`, `withFieldFromAliases`.

SHA-256 of the source span: `de54cb6d2fc7b08777e5f62b5e7e13c565a79e3bb164107e02d94f5a104d0faa`.

### evaluation:577273

Calls written directly in this body: `Object.entries`, `aliases.join`, `aliases.map`, `enabled`, `isUnknownRecord2`, `new Set`, `refuseConflictingAliases`, `reportShim`, `spec.aliases.filter`, `spec.shim.applied`, `withFieldFromAliases`.

SHA-256 of the source span: `de54cb6d2fc7b08777e5f62b5e7e13c565a79e3bb164107e02d94f5a104d0faa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
