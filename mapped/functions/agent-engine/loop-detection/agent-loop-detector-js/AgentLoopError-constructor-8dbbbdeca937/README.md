# `AgentLoopError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624579-624600](../../../../../../reference/runtime/host-main.cjs#L624579-L624600) | `method` | não | `options2` |
| [evaluation:310711-310732](../../../../../../reference/runtime/sand-eval-runner.cjs#L310711-L310732) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624579-624600](../../../../../../reference/runtime/host-main.cjs#L624579-L624600) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310711-310732](../../../../../../reference/runtime/sand-eval-runner.cjs#L310711-L310732) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:624579

Chamadas escritas diretamente neste corpo: `new CustomErrorDetails`, `new ErrorDetails`, `singleMessageLoopWireInfo`, `super`.

Alvos de atribuição ou incremento: `this.evidenceFingerprint`, `this.loopType`, `this.name`, `this.period`, `this.repetitions`, `this.singleMessageLoopKind`.

SHA-256 do trecho: `6fef0abbe78b2e10288a2c9fe9132c5a221490109315a3a13aae6cbd7ae2b43c`.

### evaluation:310711

Chamadas escritas diretamente neste corpo: `new CustomErrorDetails`, `new ErrorDetails`, `singleMessageLoopWireInfo`, `super`.

Alvos de atribuição ou incremento: `this.evidenceFingerprint`, `this.loopType`, `this.name`, `this.period`, `this.repetitions`, `this.singleMessageLoopKind`.

SHA-256 do trecho: `6fef0abbe78b2e10288a2c9fe9132c5a221490109315a3a13aae6cbd7ae2b43c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
