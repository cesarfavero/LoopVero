# `SingleMessageLoopDetector.getMultiLineLoopInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624477-624485](../../../../../../reference/runtime/host-main.cjs#L624477-L624485) | `method` | não | `(nenhum)` |
| [evaluation:310599-310607](../../../../../../reference/runtime/sand-eval-runner.cjs#L310599-L310607) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624477-624485](../../../../../../reference/runtime/host-main.cjs#L624477-L624485) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:310599-310607](../../../../../../reference/runtime/sand-eval-runner.cjs#L310599-L310607) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:624477

Chamadas escritas diretamente neste corpo: `this.detectedMultiLinePattern.join`.

SHA-256 do trecho: `5d1407ee59e909f5705a8670afa8ff417aaf19c5576a5aeb07db72ea549b60fc`.

### evaluation:310599

Chamadas escritas diretamente neste corpo: `this.detectedMultiLinePattern.join`.

SHA-256 do trecho: `5d1407ee59e909f5705a8670afa8ff417aaf19c5576a5aeb07db72ea549b60fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
