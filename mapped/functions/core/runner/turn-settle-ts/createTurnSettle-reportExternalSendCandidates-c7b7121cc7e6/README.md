# `createTurnSettle/reportExternalSendCandidates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590782-590804](../../../../../../reference/runtime/sand-eval-runner.cjs#L590782-L590804) | `ArrowFunctionExpression` | não | `calls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590782-590804](../../../../../../reference/runtime/sand-eval-runner.cjs#L590782-L590804) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:590782

Chamadas escritas diretamente neste corpo: `calls.filter`, `connectors.flatMap`, `findExternalSendConnector`, `host.externalSendConnectors`, `new Set`, `reportHostDiagnostic`.

Alvos de atribuição ou incremento: `hostless`, `noConnector`.

SHA-256 do trecho: `b68f7e534deca08af5a01a436283a8ef0a9a562fe7d85d79d5d1c02e0ee9883a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
