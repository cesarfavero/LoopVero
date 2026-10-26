# `createOrbitDaemonSessionController/finishReconciliation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705735-705745](../../../../../../../reference/runtime/host-main.cjs#L705735-L705745) | `FunctionDeclaration` | não | `running` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705735-705745](../../../../../../../reference/runtime/host-main.cjs#L705735-L705745) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:705735

Chamadas escritas diretamente neste corpo: `maybeResolveDisposal`, `requestReconciliation`.

Alvos de atribuição ou incremento: `state.reconciliationPromise`.

SHA-256 do trecho: `d52978d51449eef1137f443bf3b73d20f02881ec78ff2e43f2fce5b400a410f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
