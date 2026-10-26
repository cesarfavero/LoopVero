# `SingleMessageLoopDetector.isBinaryLikeLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624237-624250](../../../../../../reference/runtime/host-main.cjs#L624237-L624250) | `method` | não | `line` |
| [evaluation:310359-310372](../../../../../../reference/runtime/sand-eval-runner.cjs#L310359-L310372) | `method` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624237-624250](../../../../../../reference/runtime/host-main.cjs#L624237-L624250) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:310359-310372](../../../../../../reference/runtime/sand-eval-runner.cjs#L310359-L310372) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:624237

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `hasBit`.

SHA-256 do trecho: `9f0374e1c721c28e8043b5310d0e716f63f73debf3551a8280df507f19cade60`.

### evaluation:310359

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `hasBit`.

SHA-256 do trecho: `9f0374e1c721c28e8043b5310d0e716f63f73debf3551a8280df507f19cade60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
