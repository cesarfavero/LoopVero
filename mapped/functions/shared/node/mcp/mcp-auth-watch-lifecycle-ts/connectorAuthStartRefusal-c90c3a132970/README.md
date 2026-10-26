# `connectorAuthStartRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685629-685634](../../../../../../../reference/runtime/host-main.cjs#L685629-L685634) | `FunctionDeclaration` | não | `reason, probeError` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685629-685634](../../../../../../../reference/runtime/host-main.cjs#L685629-L685634) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685629

Chamadas escritas diretamente neste corpo: `SandError.connectorAuthStartRefused`, `startRefusalReason`.

SHA-256 do trecho: `7d675f631e6a552da33b09179f4f12f2493e38b95b01af092c4c0b5fc028104d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
