# `createTurnObservation/settledOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588586-588589](../../../../../../reference/runtime/sand-eval-runner.cjs#L588586-L588589) | `FunctionDeclaration` | não | `kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588586-588589](../../../../../../reference/runtime/sand-eval-runner.cjs#L588586-L588589) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:588586

Chamadas escritas diretamente neste corpo: `host.isActiveRunCanceled`, `host.isActiveRunInterrupted`, `host.recordsCancelledOutcome`.

SHA-256 do trecho: `e3424facf758d9e2884091a0867ed83adf0114f31777832e5c62cb227635708f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
