# `validateMcpServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685162-685168](../../../../../../../reference/runtime/host-main.cjs#L685162-L685168) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685162-685168](../../../../../../../reference/runtime/host-main.cjs#L685162-L685168) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:685162

Chamadas escritas diretamente neste corpo: `isMcpServerId`, `new SandMcpConfigError`, `rawId.trim`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `52df87302d308fe9958e979df3ce16602bf360e773f1c99144f72eb6791c13a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
