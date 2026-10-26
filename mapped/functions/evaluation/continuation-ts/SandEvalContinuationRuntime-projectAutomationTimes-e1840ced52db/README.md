# `_SandEvalContinuationRuntime.projectAutomationTimes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628776-628784](../../../../../reference/runtime/sand-eval-runner.cjs#L628776-L628784) | `method` | não | `automations` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628776-628784](../../../../../reference/runtime/sand-eval-runner.cjs#L628776-L628784) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628776

Chamadas escritas diretamente neste corpo: `Date.now`, `automations.map`.

SHA-256 do trecho: `e48ae1745e65fb8e4c113e8e436ef806ff615831e2a715b31c4ae312af7341a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
