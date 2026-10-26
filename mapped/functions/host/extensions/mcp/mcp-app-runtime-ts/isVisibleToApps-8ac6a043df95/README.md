# `isVisibleToApps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-app-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701434-701438](../../../../../../../reference/runtime/host-main.cjs#L701434-L701438) | `FunctionDeclaration` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701434-701438](../../../../../../../reference/runtime/host-main.cjs#L701434-L701438) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:701434

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isUnknownRecord2`, `visibility.includes`.

SHA-256 do trecho: `a696fca18a773092a32e1b06f800933fe86d5162903045bf25fd58387f37aa15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
