# `canvasToolsFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778499-778505](../../../../../../../../reference/runtime/host-main.cjs#L778499-L778505) | `FunctionDeclaration` | não | `host, decisions` |
| [evaluation:578233-578239](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578233-L578239) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778499-778505](../../../../../../../../reference/runtime/host-main.cjs#L778499-L778505) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:578233-578239](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578233-L578239) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:778499

Chamadas escritas diretamente neste corpo: `artifactToolOffers`, `createCloudCanvasTools`, `createEditCanvasTool`.

SHA-256 do trecho: `7e134cea679a78f50acc883089463a813757cd3ca41572af55db664b95be350c`.

### evaluation:578233

Chamadas escritas diretamente neste corpo: `artifactToolOffers`, `createCloudCanvasTools`, `createEditCanvasTool`.

SHA-256 do trecho: `e407ff6e4e4e3baf234d92ee80bf237f7d0f07bd9d3dfc9355ce127b2cbda9e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
