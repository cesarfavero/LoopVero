# `firstVerdict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584351-584359](../../../../../../reference/runtime/sand-eval-runner.cjs#L584351-L584359) | `FunctionDeclaration` | não | `attachments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584351-584359](../../../../../../reference/runtime/sand-eval-runner.cjs#L584351-L584359) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:584351

Chamadas escritas diretamente neste corpo: `checkAttachment`.

Alvos de atribuição ou incremento: `first`.

SHA-256 do trecho: `99c0652f8344506ba4c5c43031df7b094f9ba958ac116c0285f66c5f2daeb140`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
