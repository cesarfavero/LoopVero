# `validateServerName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-validation.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686568-686583](../../../../../../../reference/runtime/host-main.cjs#L686568-L686583) | `FunctionDeclaration` | não | `rawName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686568-686583](../../../../../../../reference/runtime/host-main.cjs#L686568-L686583) | 4 | 0 | 0 | 1 | 4 | 0 |

### host:686568

Chamadas escritas diretamente neste corpo: `RESERVED_SERVER_NAMES.has`, `name18.includes`, `new SandMcpConfigError`, `rawName.trim`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `d7bb08e058f929762d86f0d046880db5710665fd07e9bc3ece21c44a50f18c12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
