# `WorkerBlobStore.setBlobLocallyOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/isolation/README.md).

**Módulo:** `host/agent-isolation/worker-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/worker-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720414-720416](../../../../../../reference/runtime/host-main.cjs#L720414-L720416) | `method` | sim | `ctx, blobId, blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720414-720416](../../../../../../reference/runtime/host-main.cjs#L720414-L720416) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:720414

Chamadas escritas diretamente neste corpo: `this.setBlob`.

SHA-256 do trecho: `2e023b35cb9bf0aa874bfc57455b7be569587650705ff34c97c5151358a46fdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
