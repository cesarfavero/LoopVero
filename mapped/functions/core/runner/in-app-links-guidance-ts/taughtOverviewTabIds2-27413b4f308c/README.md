# `taughtOverviewTabIds2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557719-557723](../../../../../../reference/runtime/host-main.cjs#L557719-L557723) | `FunctionDeclaration` | não | `facts` |
| [evaluation:546155-546159](../../../../../../reference/runtime/sand-eval-runner.cjs#L546155-L546159) | `FunctionDeclaration` | não | `facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557719-557723](../../../../../../reference/runtime/host-main.cjs#L557719-L557723) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546155-546159](../../../../../../reference/runtime/sand-eval-runner.cjs#L546155-L546159) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557719

Chamadas escritas diretamente neste corpo: `SAND_UI_MAP.infoPane.tabIds.filter`.

SHA-256 do trecho: `7fd21503cf9b9d9f6037533f4814aef2e1475da6f034905a7f591daaf281dbc6`.

### evaluation:546155

Chamadas escritas diretamente neste corpo: `SAND_UI_MAP.infoPane.tabIds.filter`.

SHA-256 do trecho: `7fd21503cf9b9d9f6037533f4814aef2e1475da6f034905a7f591daaf281dbc6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
