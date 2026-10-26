# `_SandAgentRunner.requestPauseForUpgrade`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594058-594065](../../../../../../reference/runtime/sand-eval-runner.cjs#L594058-L594065) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594058-594065](../../../../../../reference/runtime/sand-eval-runner.cjs#L594058-L594065) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:594058

Chamadas escritas diretamente neste corpo: `cancel`, `this.autoReviewController.expireForHostPause`, `this.pauseMcpCallCancellers.clear`, `this.runShell.requestPauseForUpgrade`.

SHA-256 do trecho: `c2f3b1e4359f31e7c2099b06d7d227cbbbba1788a6af8d1d61fe452fe4c98423`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
