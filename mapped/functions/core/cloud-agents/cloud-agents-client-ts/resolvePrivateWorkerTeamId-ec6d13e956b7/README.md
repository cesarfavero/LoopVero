# `resolvePrivateWorkerTeamId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512819-512843](../../../../../../reference/runtime/host-main.cjs#L512819-L512843) | `FunctionDeclaration` | sim | `deps, environment` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512819-512843](../../../../../../reference/runtime/host-main.cjs#L512819-L512843) | 5 | 0 | 1 | 4 | 2 | 0 |

### host:512819

Chamadas escritas diretamente neste corpo: `.getTeams`, `.join`, `deps.getDashboardClient`, `new GetTeamsRequest`, `new SandCloudAgentLaunchError`, `response.teams.filter`, `teams.map`.

Alvos de lançamento explícito: `SandCloudAgentLaunchError`.

SHA-256 do trecho: `89684f3563b7445d7e58b0f26c302f6c0a7443f2bfa03598961699fec292674a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
