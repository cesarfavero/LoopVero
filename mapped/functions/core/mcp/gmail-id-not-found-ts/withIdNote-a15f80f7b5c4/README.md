# `withIdNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-id-not-found.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584502-584519](../../../../../../reference/runtime/sand-eval-runner.cjs#L584502-L584519) | `FunctionDeclaration` | não | `result, note` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584502-584519](../../../../../../reference/runtime/sand-eval-runner.cjs#L584502-L584519) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584502

Chamadas escritas diretamente neste corpo: `new McpResult`, `new McpTextContent`, `new McpToolResultContentItem`, `outcome.value.clone`, `success2.content.push`.

Alvos de atribuição ou incremento: `error63.error`.

SHA-256 do trecho: `0243360d7c04ea08a0593ba7901b8a2f63bc49b45f077feb63fdc0a599218fa8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
