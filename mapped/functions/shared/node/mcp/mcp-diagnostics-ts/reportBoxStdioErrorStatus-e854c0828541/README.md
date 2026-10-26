# `reportBoxStdioErrorStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-diagnostics.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226195-226202](../../../../../../../reference/runtime/host-main.cjs#L226195-L226202) | `FunctionDeclaration` | não | `serverIdentifier, statusDetail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226195-226202](../../../../../../../reference/runtime/host-main.cjs#L226195-L226202) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:226195

Chamadas escritas diretamente neste corpo: `boxStdioStatusClassOf`, `reportMcpHostEdgeDegraded`, `reportedBoxStdioStatuses.add`, `reportedBoxStdioStatuses.has`.

SHA-256 do trecho: `98f4c1ab14c141e24efdc3624019e91bb5e51c0ddfa03bb4e74c5d1d77fa00eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
