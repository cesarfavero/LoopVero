# `createCloudAgentsClient/listInstallationUnits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513324-513392](../../../../../../reference/runtime/host-main.cjs#L513324-L513392) | `FunctionDeclaration` | sim | `search` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513324-513392](../../../../../../reference/runtime/host-main.cjs#L513324-L513392) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:513324

Chamadas escritas diretamente neste corpo: `.sort`, `.then`, `DASHBOARD_CONNECTABLE_PROVIDERS.map`, `Promise.all`, `accessDenied.sort`, `dashboard.listGitlabEnterpriseInstances`, `deps.getDashboardClient`, `deps.getOriginClient`, `inlineUnits.sort`, `listOriginNamespaces`, `new ListGitlabEnterpriseInstancesRequest`, `new Set`, `pagedUnits.sort`.

SHA-256 do trecho: `42f46d875f6e9d1fd71666a0d1f66a744bcbeaea63f21dc2501b2dc3a24ecc56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
