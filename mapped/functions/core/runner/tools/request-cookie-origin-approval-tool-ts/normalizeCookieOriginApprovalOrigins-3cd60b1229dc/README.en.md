# `normalizeCookieOriginApprovalOrigins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775116-775131](../../../../../../../reference/runtime/host-main.cjs#L775116-L775131) | `FunctionDeclaration` | no | `raw` |
| [evaluation:574763-574778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574763-L574778) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775116-775131](../../../../../../../reference/runtime/host-main.cjs#L775116-L775131) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:574763-574778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574763-L574778) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:775116

Calls written directly in this body: `.toLowerCase`, `JSON.stringify`, `cookieOriginRequestEntryFromWire`, `entry.origin.trim`, `entry.profileId.trim`, `new Set`, `origins.push`, `seen.add`, `seen.has`.

SHA-256 of the source span: `2c2e91c40b6693610fb119b317b40d6cca455916f7c8c9e7c1663e8421cf4549`.

### evaluation:574763

Calls written directly in this body: `.toLowerCase`, `JSON.stringify`, `cookieOriginRequestEntryFromWire`, `entry.origin.trim`, `entry.profileId.trim`, `new Set`, `origins.push`, `seen.add`, `seen.has`.

SHA-256 of the source span: `2c2e91c40b6693610fb119b317b40d6cca455916f7c8c9e7c1663e8421cf4549`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
