# `isBlobDurable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-store.js` · [README do módulo](../../../../modules/agent-kv/blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615935-615937](../../../../../reference/runtime/host-main.cjs#L615935-L615937) | `FunctionDeclaration` | não | `blobStore, blobId` |
| [evaluation:284720-284722](../../../../../reference/runtime/sand-eval-runner.cjs#L284720-L284722) | `FunctionDeclaration` | não | `blobStore, blobId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615935-615937](../../../../../reference/runtime/host-main.cjs#L615935-L615937) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284720-284722](../../../../../reference/runtime/sand-eval-runner.cjs#L284720-L284722) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615935

Chamadas escritas diretamente neste corpo: `blobStore.isBlobDurable`.

SHA-256 do trecho: `c47082cebf77e8ba5d9e209e04c9e443d2116243b22dd06f232e5578bb80e1f7`.

### evaluation:284720

Chamadas escritas diretamente neste corpo: `blobStore.isBlobDurable`.

SHA-256 do trecho: `c47082cebf77e8ba5d9e209e04c9e443d2116243b22dd06f232e5578bb80e1f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
