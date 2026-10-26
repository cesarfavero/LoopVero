# `createRequestScmConnectTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/request-scm-connect-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/request-scm-connect-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776659-776683](../../../../../../../reference/runtime/host-main.cjs#L776659-L776683) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:576310-576334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576310-L576334) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776659-776683](../../../../../../../reference/runtime/host-main.cjs#L776659-L776683) | 3 | 0 | 3 | 2 | 0 | 0 |
| [evaluation:576310-576334](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576310-L576334) | 3 | 0 | 3 | 2 | 0 | 0 |

### host:776659

Chamadas escritas diretamente neste corpo: `Date.now`, `JSON.stringify`, `String`, `armScmConnectWaits`, `cardOffered2.increment`, `d.emitCard`, `describeCardFollowUp`, `resolveCardTaskThread`, `scmConnectCardFromRequest`, `sentCards.add`, `sentCards.has`, `wakeLabel`.

SHA-256 do trecho: `e00190c8962ddf9e69308c55186b24b69759ccdec99299dc49d7cfc3523a996a`.

### evaluation:576310

Chamadas escritas diretamente neste corpo: `Date.now`, `JSON.stringify`, `String`, `armScmConnectWaits`, `cardOffered2.increment`, `d.emitCard`, `describeCardFollowUp`, `resolveCardTaskThread`, `scmConnectCardFromRequest`, `sentCards.add`, `sentCards.has`, `wakeLabel`.

SHA-256 do trecho: `e00190c8962ddf9e69308c55186b24b69759ccdec99299dc49d7cfc3523a996a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
