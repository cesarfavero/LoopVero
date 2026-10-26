# `sandUsageWarningExperimentAssignmentOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/experiments/experiments.ts` · [README do módulo](../../../../../modules/shared/experiments/experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451277-451288](../../../../../../reference/runtime/host-main.cjs#L451277-L451288) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451277-451288](../../../../../../reference/runtime/host-main.cjs#L451277-L451288) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:451277

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `isUnknownRecord2`.

SHA-256 do trecho: `f3142371df17a714c72bfd2cadb8be015637a1d1f629b8b531ee8af98b81f3b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
