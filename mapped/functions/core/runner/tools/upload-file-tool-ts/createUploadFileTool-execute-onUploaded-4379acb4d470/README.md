# `createUploadFileTool/execute/onUploaded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/upload-file-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774794-774802](../../../../../../../reference/runtime/host-main.cjs#L774794-L774802) | `ArrowFunctionExpression` | não | `uploaded` |
| [evaluation:574397-574405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574397-L574405) | `ArrowFunctionExpression` | não | `uploaded` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774794-774802](../../../../../../../reference/runtime/host-main.cjs#L774794-L774802) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574397-574405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574397-L574405) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:774794

Chamadas escritas diretamente neste corpo: `connectorServiceKey`, `deps.getAgentId`, `recordLibraryDocTouches`, `uploadedDocTouch`.

SHA-256 do trecho: `4c83fd13339a075ab69d3ff11e4befd96712d218832a1b33cb2e3c7a3123d286`.

### evaluation:574397

Chamadas escritas diretamente neste corpo: `connectorServiceKey`, `deps.getAgentId`, `recordLibraryDocTouches`, `uploadedDocTouch`.

SHA-256 do trecho: `4c83fd13339a075ab69d3ff11e4befd96712d218832a1b33cb2e3c7a3123d286`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
