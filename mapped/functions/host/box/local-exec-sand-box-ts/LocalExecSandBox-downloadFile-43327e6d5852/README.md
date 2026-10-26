# `LocalExecSandBox.downloadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/local-exec-sand-box.ts` · [README do módulo](../../../../../modules/host/box/local-exec-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627092-627108](../../../../../../reference/runtime/sand-eval-runner.cjs#L627092-L627108) | `method` | sim | `_ctx, _agentId, boxPath, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627092-627108](../../../../../../reference/runtime/sand-eval-runner.cjs#L627092-L627108) | 2 | 0 | 3 | 1 | 1 | 0 |

### evaluation:627092

Chamadas escritas diretamente neste corpo: `assertPathOutsideProtectedRoots`, `new BoxFileTooLargeError`, `new Uint8Array`, `resolveProjectDir`, `this.resolveBoxPath`.

Alvos de lançamento explícito: `BoxFileTooLargeError`.

SHA-256 do trecho: `6427fb2e263938f4a153041bd5d3f3e124d39235560d40785ffbb728c547f4e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
