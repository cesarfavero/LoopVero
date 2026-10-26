# `UntrustedSandDataFileError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453717-453721](../../../../../reference/runtime/host-main.cjs#L453717-L453721) | `method` | não | `reason, path33` |
| [state-worker:476-480](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L476-L480) | `method` | não | `reason, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453717-453721](../../../../../reference/runtime/host-main.cjs#L453717-L453721) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:476-480](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L476-L480) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453717

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.path`, `this.reason`.

SHA-256 do trecho: `6b475aca57629e6adac7b7c28ae09337b0cb0f323b0f020c6349f20241de818b`.

### state-worker:476

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.path`, `this.reason`.

SHA-256 do trecho: `89c0e5056f8700fe6611fbc62305a7042036b61ed22c09640a5cedd1ca45bdcf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
