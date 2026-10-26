# `createTurnSettle/recordAutomationRunLabeling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591035-591058](../../../../../../reference/runtime/sand-eval-runner.cjs#L591035-L591058) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591035-591058](../../../../../../reference/runtime/sand-eval-runner.cjs#L591035-L591058) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:591035

Chamadas escritas diretamente neste corpo: `errorLogTag`, `host.latestPromptMessages`, `labelingIdentity`, `record4`, `reportHostDiagnostic`.

SHA-256 do trecho: `8ed457bbe4ce9079b7d2057cc53716c9af49fdf446698dbb615cb02d955b2b14`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
