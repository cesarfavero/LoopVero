# `_SandEvalContinuationRuntime.finishWake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628838-628846](../../../../../reference/runtime/sand-eval-runner.cjs#L628838-L628846) | `method` | não | `wake, status, detail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628838-628846](../../../../../reference/runtime/sand-eval-runner.cjs#L628838-L628846) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:628838

Chamadas escritas diretamente neste corpo: `this.store.finishRunDefinition`.

SHA-256 do trecho: `4edc43f9b74bb5631464aa8d6655fdb298adb873bd24670e900af190c2039fde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
