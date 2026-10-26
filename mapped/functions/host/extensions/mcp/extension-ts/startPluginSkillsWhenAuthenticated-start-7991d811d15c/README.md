# `startPluginSkillsWhenAuthenticated/start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702392-702406](../../../../../../../reference/runtime/host-main.cjs#L702392-L702406) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702392-702406](../../../../../../../reference/runtime/host-main.cjs#L702392-L702406) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702392

Chamadas escritas diretamente neste corpo: `options2.polling.start`.

Alvos de atribuição ou incremento: `pollingHandle`, `started2`.

SHA-256 do trecho: `11ae17c5623054ff32d18a0fd9bf67863c9991a71c1cc70b62c85fae5525c45f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
