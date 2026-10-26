# `createCloudAgentsClient/listPrComposersInCallerScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513063-513096](../../../../../../reference/runtime/host-main.cjs#L513063-L513096) | `FunctionDeclaration` | sim | `prUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513063-513096](../../../../../../reference/runtime/host-main.cjs#L513063-L513096) | 2 | 1 | 3 | 2 | 3 | 2 |

### host:513063

Chamadas escritas diretamente neste corpo: `.getTeams`, `.listPrBackgroundComposers`, `.map`, `.slice`, `client`, `deps.getDashboardClient`, `isRequestScopeMismatch`, `new CloudAgentPersonalScope`, `new CloudAgentRequestScope`, `new GetTeamsRequest`, `request5`, `teams.teams.filter`.

Alvos de atribuição ou incremento: `lastScopeMismatch`.

Alvos de lançamento explícito: `error64`, `lastScopeMismatch`.

SHA-256 do trecho: `8aae4e81586307b4508c5e2c0308d994ebcaa69ae1d2d0775f1ea8394dc43935`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
