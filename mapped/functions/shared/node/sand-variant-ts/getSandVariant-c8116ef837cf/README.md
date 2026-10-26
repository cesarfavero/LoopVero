# `getSandVariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/sand-variant.ts` · [README do módulo](../../../../../modules/shared/node/sand-variant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430840-430842](../../../../../../reference/runtime/host-main.cjs#L430840-L430842) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:530449-530451](../../../../../../reference/runtime/sand-eval-runner.cjs#L530449-L530451) | `FunctionDeclaration` | não | `(nenhum)` |
| [state-worker:371-373](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L371-L373) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430840-430842](../../../../../../reference/runtime/host-main.cjs#L430840-L430842) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530449-530451](../../../../../../reference/runtime/sand-eval-runner.cjs#L530449-L530451) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:371-373](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L371-L373) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430840

Chamadas escritas diretamente neste corpo: `sandVariantOf`.

SHA-256 do trecho: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

### evaluation:530449

Chamadas escritas diretamente neste corpo: `sandVariantOf`.

SHA-256 do trecho: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

### state-worker:371

Chamadas escritas diretamente neste corpo: `sandVariantOf`.

SHA-256 do trecho: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
