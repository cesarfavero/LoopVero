# `recordSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-listing-spans.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-listing-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693429-693435](../../../../../../reference/runtime/host-main.cjs#L693429-L693435) | `FunctionDeclaration` | não | `parent, name18, startedAtMs, endedAtMs, attributes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693429-693435](../../../../../../reference/runtime/host-main.cjs#L693429-L693435) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:693429

Chamadas escritas diretamente neste corpo: `Math.max`, `parent.withName`, `recordCompletedSpanIfParented`.

SHA-256 do trecho: `873544f3caf4d93241a4d49dfadf04b10da2a34b33af071734139eeaf0ae2da9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
