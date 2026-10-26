# `parseCaptchaScanResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489645-489666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489645-L489666) | `FunctionDeclaration` | não | `stdout, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489645-489666](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489645-L489666) | 6 | 1 | 0 | 4 | 0 | 0 |

### evaluation:489645

Chamadas escritas diretamente neste corpo: `.findLast`, `Array.isArray`, `isUnknownRecord2`, `markerLine.indexOf`, `markerLine.slice`, `new Map`, `parseJsonOrUndefined2`, `request3.targets.some`, `scanOf`, `scans.has`, `scans.set`, `stdout.split`.

SHA-256 do trecho: `29a445cde8793693462606ff226969ccb6b29941fe4f799e83d97835025bf9f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
