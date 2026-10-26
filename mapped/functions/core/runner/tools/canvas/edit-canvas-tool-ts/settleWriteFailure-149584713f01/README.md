# `settleWriteFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775621-775638](../../../../../../../../reference/runtime/host-main.cjs#L775621-L775638) | `FunctionDeclaration` | sim | `port, args` |
| [evaluation:575265-575282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575265-L575282) | `FunctionDeclaration` | sim | `port, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775621-775638](../../../../../../../../reference/runtime/host-main.cjs#L775621-L775638) | 7 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:575265-575282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575265-L575282) | 7 | 0 | 3 | 6 | 0 | 0 |

### host:775621

Chamadas escritas diretamente neste corpo: `port.read`, `port.write`.

SHA-256 do trecho: `153fa63ae22eb6c56d17bbe008a326c7a841ebd52faa954b979f81f0e150986d`.

### evaluation:575265

Chamadas escritas diretamente neste corpo: `port.read`, `port.write`.

SHA-256 do trecho: `153fa63ae22eb6c56d17bbe008a326c7a841ebd52faa954b979f81f0e150986d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
