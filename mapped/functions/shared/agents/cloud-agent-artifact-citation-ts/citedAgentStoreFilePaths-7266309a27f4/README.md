# `citedAgentStoreFilePaths`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/cloud-agent-artifact-citation.ts` · [README do módulo](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508198-508209](../../../../../../reference/runtime/host-main.cjs#L508198-L508209) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508198-508209](../../../../../../reference/runtime/host-main.cjs#L508198-L508209) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:508198

Chamadas escritas diretamente neste corpo: `cited.push`, `decodedTokenOrNull`, `isAgentStoreFileCitation`, `new Set`, `raw.includes`, `seen.add`, `seen.has`, `text3.split`, `token.replace`.

SHA-256 do trecho: `59728e92a6ae99d75952f6b9c50b73c7cfdfcb905267ded28f574bf07ecef34c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
