# `bucketClockSkewDeltaMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/clock-skew-guard.ts` · [README do módulo](../../../../../modules/core/runner/clock-skew-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588549-588563](../../../../../../reference/runtime/sand-eval-runner.cjs#L588549-L588563) | `FunctionDeclaration` | não | `rawDeltaMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588549-588563](../../../../../../reference/runtime/sand-eval-runner.cjs#L588549-L588563) | 7 | 0 | 0 | 8 | 0 | 0 |

### evaluation:588549

Chamadas escritas diretamente neste corpo: `Number.isFinite`.

SHA-256 do trecho: `f9c3e16d5abe57f3abf5655d6c1bba5c50a275701274dec57ece92c0ff648544`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
