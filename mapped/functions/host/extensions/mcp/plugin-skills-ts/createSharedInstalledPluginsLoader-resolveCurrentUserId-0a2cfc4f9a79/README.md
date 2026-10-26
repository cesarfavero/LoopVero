# `createSharedInstalledPluginsLoader/resolveCurrentUserId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/plugin-skills.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701784-701796](../../../../../../../reference/runtime/host-main.cjs#L701784-L701796) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701784-701796](../../../../../../../reference/runtime/host-main.cjs#L701784-L701796) | 2 | 0 | 2 | 2 | 0 | 1 |

### host:701784

Chamadas escritas diretamente neste corpo: `dashboardClient.getMe`, `deps.auth.getTeamId`, `deps.log`, `errorLogTag`, `selectedTeamGetMeRequest`.

Alvos de atribuição ou incremento: `currentUserId`.

SHA-256 do trecho: `3d0bb734eb99caea5c57536ef4474f25fb12f048d4fc2e6d4a08cc05dd5574b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
