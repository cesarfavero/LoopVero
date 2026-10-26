# `SingleMessageLoopDetector.updateCodeFenceStateOnLineEnd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624454-624463](../../../../../../reference/runtime/host-main.cjs#L624454-L624463) | `method` | não | `line` |
| [evaluation:310576-310585](../../../../../../reference/runtime/sand-eval-runner.cjs#L310576-L310585) | `method` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624454-624463](../../../../../../reference/runtime/host-main.cjs#L624454-L624463) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310576-310585](../../../../../../reference/runtime/sand-eval-runner.cjs#L310576-L310585) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:624454

Chamadas escritas diretamente neste corpo: `line.match`.

Alvos de atribuição ou incremento: `this.insideCodeFence`.

SHA-256 do trecho: `28c6b6152826e4c140a740695d9502fbe6171892ce2fe2d7055ab8f6991ce9ad`.

### evaluation:310576

Chamadas escritas diretamente neste corpo: `line.match`.

Alvos de atribuição ou incremento: `this.insideCodeFence`.

SHA-256 do trecho: `28c6b6152826e4c140a740695d9502fbe6171892ce2fe2d7055ab8f6991ce9ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
