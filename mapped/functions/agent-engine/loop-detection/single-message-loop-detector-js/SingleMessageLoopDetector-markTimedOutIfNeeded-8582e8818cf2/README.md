# `SingleMessageLoopDetector.markTimedOutIfNeeded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624439-624453](../../../../../../reference/runtime/host-main.cjs#L624439-L624453) | `method` | não | `{ caller, deadlineMs, phase, startTime }` |
| [evaluation:310561-310575](../../../../../../reference/runtime/sand-eval-runner.cjs#L310561-L310575) | `method` | não | `{ caller, deadlineMs, phase, startTime }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624439-624453](../../../../../../reference/runtime/host-main.cjs#L624439-L624453) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:310561-310575](../../../../../../reference/runtime/sand-eval-runner.cjs#L310561-L310575) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:624439

Chamadas escritas diretamente neste corpo: `performance.now`, `this.hooks.onTimeout`.

Alvos de atribuição ou incremento: `this.didTimeout`.

SHA-256 do trecho: `11f044d29539e1f3ca93a4df13a2013d4d830d8c222de02df3370c9d45d01d96`.

### evaluation:310561

Chamadas escritas diretamente neste corpo: `performance.now`, `this.hooks.onTimeout`.

Alvos de atribuição ou incremento: `this.didTimeout`.

SHA-256 do trecho: `11f044d29539e1f3ca93a4df13a2013d4d830d8c222de02df3370c9d45d01d96`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
