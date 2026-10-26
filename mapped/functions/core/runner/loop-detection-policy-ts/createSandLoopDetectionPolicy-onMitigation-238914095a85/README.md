# `createSandLoopDetectionPolicy/onMitigation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483468-483504](../../../../../../reference/runtime/sand-eval-runner.cjs#L483468-L483504) | `ArrowFunctionExpression` | não | `observation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483468-483504](../../../../../../reference/runtime/sand-eval-runner.cjs#L483468-L483504) | 9 | 0 | 0 | 6 | 0 | 0 |

### evaluation:483468

Chamadas escritas diretamente neste corpo: `closedMitigations.add`, `closedMitigations.has`, `detectionByFingerprint.get`, `emitMitigation`, `new AgentLoopError`, `openMitigations.delete`, `openMitigations.has`, `openMitigations.set`, `remindedThisTurn.add`, `remindedThisTurn.has`, `stopOnRepeatTrip.stop`.

Alvos de atribuição ou incremento: `mitigationsEmitted`.

SHA-256 do trecho: `9900158820d3ab2f8a6531d7baab24a4d78cd1bda6a22bfa1bf67f849a0c264d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
