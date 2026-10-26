# `bringTakeoverPageToFront`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-takeover.ts` · [README do módulo](../../../../../modules/core/box/box-takeover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775983-776075](../../../../../../reference/runtime/host-main.cjs#L775983-L776075) | `FunctionDeclaration` | sim | `ctx, deps, request5` |
| [evaluation:575640-575732](../../../../../../reference/runtime/sand-eval-runner.cjs#L575640-L575732) | `FunctionDeclaration` | sim | `ctx, deps, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775983-776075](../../../../../../reference/runtime/host-main.cjs#L775983-L776075) | 10 | 0 | 7 | 4 | 0 | 0 |
| [evaluation:575640-575732](../../../../../../reference/runtime/sand-eval-runner.cjs#L575640-L575732) | 10 | 0 | 7 | 4 | 0 | 0 |

### host:775983

Chamadas escritas diretamente neste corpo: `.flatMap`, `boundUrlOf`, `classifyNavigationProbeResult`, `deps.accessor.get`, `firstPageOn`, `pagesOf`, `removeStagedUrl`, `reportTakeoverFailure`, `run`, `shellQuote`, `siteOf`, `succeeded`, `untilCanceled`.

Alvos de atribuição ou incremento: `opened`.

SHA-256 do trecho: `bc89f02d889311726bc25322de2b4829a9d09b3b674d59a8cc6626b372c4fa87`.

### evaluation:575640

Chamadas escritas diretamente neste corpo: `.flatMap`, `boundUrlOf`, `classifyNavigationProbeResult`, `deps.accessor.get`, `firstPageOn`, `pagesOf`, `removeStagedUrl`, `reportTakeoverFailure`, `run`, `shellQuote`, `siteOf`, `succeeded`, `untilCanceled`.

Alvos de atribuição ou incremento: `opened`.

SHA-256 do trecho: `57cde736ed422e7b8163eb62c7dd5f11a5f95901d44cb938acb2a01cc74bcd61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
