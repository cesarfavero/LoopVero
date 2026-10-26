# `createHostMcp/createExecutor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701091-701110](../../../../../../reference/runtime/host-main.cjs#L701091-L701110) | `ArrowFunctionExpression` | não | `persistImage, spillLargeText, auditIdentity, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701091-701110](../../../../../../reference/runtime/host-main.cjs#L701091-L701110) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:701091

Chamadas escritas diretamente neste corpo: `new SandMcpExecutor`.

SHA-256 do trecho: `5365b4c32bdbbf1f0600512e681e3609c4c93793c3e3afd01dee4e33348d4cdd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
