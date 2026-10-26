# `reportMcpHostEdgeDegraded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-diagnostics.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226182-226190](../../../../../../../reference/runtime/host-main.cjs#L226182-L226190) | `FunctionDeclaration` | não | `leg, errorClass` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226182-226190](../../../../../../../reference/runtime/host-main.cjs#L226182-L226190) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:226182

Chamadas escritas diretamente neste corpo: `buffered.push`, `pinnedReporter3`.

SHA-256 do trecho: `aa142838621f91a21ab00c6ee9bf3ca00c5098cc559d396d8d4b0a895bbe57d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
