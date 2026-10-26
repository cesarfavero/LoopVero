# `normalizeCookieOriginApprovalOrigins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775116-775131](../../../../../../../reference/runtime/host-main.cjs#L775116-L775131) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574763-574778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574763-L574778) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775116-775131](../../../../../../../reference/runtime/host-main.cjs#L775116-L775131) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:574763-574778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574763-L574778) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:775116

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `JSON.stringify`, `cookieOriginRequestEntryFromWire`, `entry.origin.trim`, `entry.profileId.trim`, `new Set`, `origins.push`, `seen.add`, `seen.has`.

SHA-256 do trecho: `2c2e91c40b6693610fb119b317b40d6cca455916f7c8c9e7c1663e8421cf4549`.

### evaluation:574763

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `JSON.stringify`, `cookieOriginRequestEntryFromWire`, `entry.origin.trim`, `entry.profileId.trim`, `new Set`, `origins.push`, `seen.add`, `seen.has`.

SHA-256 do trecho: `2c2e91c40b6693610fb119b317b40d6cca455916f7c8c9e7c1663e8421cf4549`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
