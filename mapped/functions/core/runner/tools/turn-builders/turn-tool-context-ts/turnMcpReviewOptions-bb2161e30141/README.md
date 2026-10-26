# `turnMcpReviewOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569354-569367](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569354-L569367) | `FunctionDeclaration` | não | `host, turn, props, extractConversationContext` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569354-569367](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569354-L569367) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:569354

Chamadas escritas diretamente neste corpo: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `527e12b082e328665635870b6706800f7fcafa0c5062a3c23728bb233981e1e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
