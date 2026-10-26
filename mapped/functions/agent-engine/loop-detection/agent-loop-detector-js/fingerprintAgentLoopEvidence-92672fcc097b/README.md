# `fingerprintAgentLoopEvidence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624542-624550](../../../../../../reference/runtime/host-main.cjs#L624542-L624550) | `FunctionDeclaration` | não | `loopKind, evidenceParts` |
| [evaluation:310664-310672](../../../../../../reference/runtime/sand-eval-runner.cjs#L310664-L310672) | `FunctionDeclaration` | não | `loopKind, evidenceParts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624542-624550](../../../../../../reference/runtime/host-main.cjs#L624542-L624550) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:310664-310672](../../../../../../reference/runtime/sand-eval-runner.cjs#L310664-L310672) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:624542

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `hash2.digest`, `hash2.update`.

SHA-256 do trecho: `fd2304fef018cf349f9f6d3de66bcce970aeed408e590d9509ab6314459f400c`.

### evaluation:310664

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `hash2.digest`, `hash2.update`.

SHA-256 do trecho: `39de7692acc59d7edb9dea70bd660e100b7a5499768f1d73b31c49370cbfb995`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
