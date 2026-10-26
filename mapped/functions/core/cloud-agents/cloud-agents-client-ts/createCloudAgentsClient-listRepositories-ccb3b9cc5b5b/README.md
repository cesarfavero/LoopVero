# `createCloudAgentsClient/listRepositories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513429-513538](../../../../../../reference/runtime/host-main.cjs#L513429-L513538) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513429-513538](../../../../../../reference/runtime/host-main.cjs#L513429-L513538) | 10 | 3 | 4 | 1 | 0 | 0 |

### host:513429

Chamadas escritas diretamente neste corpo: `Math.floor`, `decodeRepositoriesCursor`, `deps.getDashboardClient`, `deps.getOriginClient`, `encodeRepositoriesCursor`, `fetchUnitPage`, `listInstallationUnits`, `page.repos.slice`, `rehydrateInlineUnits`, `repos.push`, `state.units.slice`, `unlistableInstallations.push`, `walkOriginRepositories`.

Alvos de atribuição ou incremento: `fetches`, `index`, `nextCursor`, `offset2`, `page`.

SHA-256 do trecho: `23ef5f622ed671390f2304d7524109e49aac752d912c0cbd51cf81b81eeb987a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
