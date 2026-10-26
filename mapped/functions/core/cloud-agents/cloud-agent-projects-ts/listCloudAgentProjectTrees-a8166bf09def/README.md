# `listCloudAgentProjectTrees`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-projects.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509042-509056](../../../../../../reference/runtime/host-main.cjs#L509042-L509056) | `FunctionDeclaration` | sim | `backend, bcIds, readPortalBaseUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509042-509056](../../../../../../reference/runtime/host-main.cjs#L509042-L509056) | 0 | 2 | 1 | 1 | 0 | 0 |

### host:509042

Chamadas escritas diretamente neste corpo: `.filter`, `backend.listProjectSubtrees`, `bcIds.map`, `new ListProjectSubtreesRequest`, `new Map`, `new Set`, `rootBcIds.slice`, `toProjectTree`, `trees.set`.

Alvos de atribuição ou incremento: `offset2`.

SHA-256 do trecho: `1e975ed8d03669ebf368f649037a5fe1bea44a42169a6ffb0a1901e179a47d39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
