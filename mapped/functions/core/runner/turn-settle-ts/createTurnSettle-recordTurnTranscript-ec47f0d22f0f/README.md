# `createTurnSettle/recordTurnTranscript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591014-591034](../../../../../../reference/runtime/sand-eval-runner.cjs#L591014-L591034) | `ArrowFunctionExpression` | não | `baseCtx, messages, settled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591014-591034](../../../../../../reference/runtime/sand-eval-runner.cjs#L591014-L591034) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:591014

Chamadas escritas diretamente neste corpo: `baseCtx.get`, `errorLogTag`, `record4`, `reportHostDiagnostic`.

SHA-256 do trecho: `ebd5241e3439ef471b8b6d10b57ec2c29696d1ae54230fb6a855fcb65dab7e9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
