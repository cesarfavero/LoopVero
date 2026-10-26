# `boxBrowserWindowDeps/onPossibleNavigation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751484-751488](../../../../../../../../reference/runtime/host-main.cjs#L751484-L751488) | `ArrowFunctionExpression` | não | `ctx` |
| [evaluation:524335-524339](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524335-L524339) | `ArrowFunctionExpression` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751484-751488](../../../../../../../../reference/runtime/host-main.cjs#L751484-L751488) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524335-524339](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524335-L524339) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751484

Chamadas escritas diretamente neste corpo: `.probe`, `boxAgentWindowIndex`, `ctx.withDetached`, `host.getOrCreateNavigationProbe`, `host.resolveBoxId`.

SHA-256 do trecho: `54088d963b76f5419d9bebb931468bc9ae8c094bdcbf483b04b6878d6b09a445`.

### evaluation:524335

Chamadas escritas diretamente neste corpo: `.probe`, `boxAgentWindowIndex`, `ctx.withDetached`, `host.getOrCreateNavigationProbe`, `host.resolveBoxId`.

SHA-256 do trecho: `54088d963b76f5419d9bebb931468bc9ae8c094bdcbf483b04b6878d6b09a445`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
