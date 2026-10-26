# `sanitizeCrossClockDurationMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/clock-skew-guard.ts` · [README do módulo](../../../../../modules/core/runner/clock-skew-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588537-588548](../../../../../../reference/runtime/sand-eval-runner.cjs#L588537-L588548) | `FunctionDeclaration` | não | `rawDeltaMs, ceilingMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588537-588548](../../../../../../reference/runtime/sand-eval-runner.cjs#L588537-L588548) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:588537

Chamadas escritas diretamente neste corpo: `Math.round`, `Number.isFinite`.

SHA-256 do trecho: `34ad462d89538bb12fbb1a3924bde2f5062dfa71b5ea06bda86d75beb06b33ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
