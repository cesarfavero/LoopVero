# `normalizationForm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768305-768313](../../../../../../../../reference/runtime/host-main.cjs#L768305-L768313) | `FunctionDeclaration` | não | `raw` |
| [evaluation:563821-563829](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563821-L563829) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768305-768313](../../../../../../../../reference/runtime/host-main.cjs#L768305-L768313) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:563821-563829](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563821-L563829) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:768305

Chamadas escritas diretamente neste corpo: `raw.endsWith`, `raw.startsWith`, `raw.toLowerCase`.

SHA-256 do trecho: `3544991c952fb603d1d12a10a31019f657d1ff156aad008d802956c14eaffcf2`.

### evaluation:563821

Chamadas escritas diretamente neste corpo: `raw.endsWith`, `raw.startsWith`, `raw.toLowerCase`.

SHA-256 do trecho: `3544991c952fb603d1d12a10a31019f657d1ff156aad008d802956c14eaffcf2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
