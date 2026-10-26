# `refusalResult2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-draft-send-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-draft-send-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584417-584434](../../../../../../reference/runtime/sand-eval-runner.cjs#L584417-L584434) | `FunctionDeclaration` | não | `fields3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584417-584434](../../../../../../reference/runtime/sand-eval-runner.cjs#L584417-L584434) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584417

Chamadas escritas diretamente neste corpo: `gmailDraftSendRefusal`, `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`.

SHA-256 do trecho: `733253e6e27c30cb586f8cd49f55e873cbd0df326f200e53a095fd7625a185b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
