# `reportLoopObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624551-624559](../../../../../../reference/runtime/host-main.cjs#L624551-L624559) | `FunctionDeclaration` | não | `reporting, observation` |
| [evaluation:310683-310691](../../../../../../reference/runtime/sand-eval-runner.cjs#L310683-L310691) | `FunctionDeclaration` | não | `reporting, observation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624551-624559](../../../../../../reference/runtime/host-main.cjs#L624551-L624559) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:310683-310691](../../../../../../reference/runtime/sand-eval-runner.cjs#L310683-L310691) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:624551

Chamadas escritas diretamente neste corpo: `reporting.onDetection`.

SHA-256 do trecho: `ddd6f62244981b6d4a2d593098687881a11a42e486fa2eb1f3178f10ebc3760f`.

### evaluation:310683

Chamadas escritas diretamente neste corpo: `reporting.onDetection`.

SHA-256 do trecho: `ddd6f62244981b6d4a2d593098687881a11a42e486fa2eb1f3178f10ebc3760f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
