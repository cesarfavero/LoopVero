# `isSandProfileNamedBy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/agents.ts` · [README do módulo](../../../../../modules/shared/agents/agents-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485328-485330](../../../../../../reference/runtime/host-main.cjs#L485328-L485330) | `FunctionDeclaration` | não | `value` |
| [evaluation:629005-629007](../../../../../../reference/runtime/sand-eval-runner.cjs#L629005-L629007) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485328-485330](../../../../../../reference/runtime/host-main.cjs#L485328-L485330) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629005-629007](../../../../../../reference/runtime/sand-eval-runner.cjs#L629005-L629007) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485328

Chamadas escritas diretamente neste corpo: `SAND_PROFILE_NAMED_BY.some`.

SHA-256 do trecho: `8e1153daa1914116f035543b216a082d9a4a95db907043999cbaa96afd24baa7`.

### evaluation:629005

Chamadas escritas diretamente neste corpo: `SAND_PROFILE_NAMED_BY.some`.

SHA-256 do trecho: `8e1153daa1914116f035543b216a082d9a4a95db907043999cbaa96afd24baa7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
