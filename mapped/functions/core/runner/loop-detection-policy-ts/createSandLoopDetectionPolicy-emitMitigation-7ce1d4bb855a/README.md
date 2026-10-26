# `createSandLoopDetectionPolicy/emitMitigation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483437-483451](../../../../../../reference/runtime/sand-eval-runner.cjs#L483437-L483451) | `ArrowFunctionExpression` | não | `observation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483437-483451](../../../../../../reference/runtime/sand-eval-runner.cjs#L483437-L483451) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:483437

Chamadas escritas diretamente neste corpo: `detectionByFingerprint.get`, `errorLogTag`, `projectLoopMitigationObservation`, `reportHostDiagnostic`, `reportMitigation`.

SHA-256 do trecho: `f2c6ef8b1efc8b9646d3feb89b81c16edaee2bb7c115295c09426d20c17b4cf3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
