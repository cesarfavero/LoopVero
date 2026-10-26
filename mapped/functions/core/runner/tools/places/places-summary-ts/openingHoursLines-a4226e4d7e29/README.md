# `openingHoursLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/tools/places/places-summary.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768895-768903](../../../../../../../../reference/runtime/host-main.cjs#L768895-L768903) | `FunctionDeclaration` | não | `place, nowMs2` |
| [evaluation:564470-564478](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564470-L564478) | `FunctionDeclaration` | não | `place, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768895-768903](../../../../../../../../reference/runtime/host-main.cjs#L768895-L768903) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:564470-564478](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564470-L564478) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:768895

Chamadas escritas diretamente neste corpo: `.filter`, `lines2.map`, `openingStatus`.

SHA-256 do trecho: `23b8c517a06ccd388bc89b84cc3f7b9fd6563a855e74d866afb942c23d0aabe8`.

### evaluation:564470

Chamadas escritas diretamente neste corpo: `.filter`, `lines2.map`, `openingStatus`.

SHA-256 do trecho: `2ab7e8506fa0e39b6322c68188fdb9b4e3bb346121eb75cafa02be6310656f87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
