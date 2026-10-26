# `createHostMcp/reconcileBoxServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701331-701335](../../../../../../reference/runtime/host-main.cjs#L701331-L701335) | `ArrowFunctionExpression` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701331-701335](../../../../../../reference/runtime/host-main.cjs#L701331-L701335) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:701331

Chamadas escritas diretamente neste corpo: `.reloadBoxServers`, `discovery.reconcileBoxServers`, `discovery.resetPushState`, `manager.definitionSourceView`.

SHA-256 do trecho: `e81b69117827fd99332bd9d4f2785afa4adff482e55234f6b7fe999468338b54`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
