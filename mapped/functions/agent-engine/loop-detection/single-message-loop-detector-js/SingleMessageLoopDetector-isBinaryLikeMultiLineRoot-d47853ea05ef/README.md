# `SingleMessageLoopDetector.isBinaryLikeMultiLineRoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624254-624262](../../../../../../reference/runtime/host-main.cjs#L624254-L624262) | `method` | não | `period` |
| [evaluation:310376-310384](../../../../../../reference/runtime/sand-eval-runner.cjs#L310376-L310384) | `method` | não | `period` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624254-624262](../../../../../../reference/runtime/host-main.cjs#L624254-L624262) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:310376-310384](../../../../../../reference/runtime/sand-eval-runner.cjs#L310376-L310384) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:624254

Chamadas escritas diretamente neste corpo: `this.getLineAt`, `this.isBinaryLikeLine`.

Alvos de atribuição ou incremento: `j2`.

SHA-256 do trecho: `711d5773f9cce65149e0119f9582bbb0c70a0f1b6f1abd1b003b3c415cefc722`.

### evaluation:310376

Chamadas escritas diretamente neste corpo: `this.getLineAt`, `this.isBinaryLikeLine`.

Alvos de atribuição ou incremento: `j2`.

SHA-256 do trecho: `711d5773f9cce65149e0119f9582bbb0c70a0f1b6f1abd1b003b3c415cefc722`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
