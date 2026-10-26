# `citedFileTokens`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/cloud-agent-artifact-citation.ts` · [README do módulo](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508176-508186](../../../../../../reference/runtime/host-main.cjs#L508176-L508186) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508176-508186](../../../../../../reference/runtime/host-main.cjs#L508176-L508186) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:508176

Chamadas escritas diretamente neste corpo: `addCitedToken`, `decodedTokenOrNull`, `new Set`, `raw.includes`, `text3.split`.

SHA-256 do trecho: `f081d40d89c9c1a10d2ce6646b054beba1c5696f34e7255c27b4351650a243d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
