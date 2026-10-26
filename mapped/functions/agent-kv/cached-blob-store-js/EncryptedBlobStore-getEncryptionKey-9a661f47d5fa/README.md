# `_EncryptedBlobStore.getEncryptionKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616447-616452](../../../../../reference/runtime/host-main.cjs#L616447-L616452) | `method` | sim | `(nenhum)` |
| [evaluation:284987-284992](../../../../../reference/runtime/sand-eval-runner.cjs#L284987-L284992) | `method` | sim | `(nenhum)` |
| [state-worker:21820-21825](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21820-L21825) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616447-616452](../../../../../reference/runtime/host-main.cjs#L616447-L616452) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284987-284992](../../../../../reference/runtime/sand-eval-runner.cjs#L284987-L284992) | 1 | 0 | 1 | 1 | 0 | 0 |
| [state-worker:21820-21825](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21820-L21825) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:616447

Chamadas escritas diretamente neste corpo: `_EncryptedBlobStore.deriveKey`.

Alvos de atribuição ou incremento: `this.encryptionKey`.

SHA-256 do trecho: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

### evaluation:284987

Chamadas escritas diretamente neste corpo: `_EncryptedBlobStore.deriveKey`.

Alvos de atribuição ou incremento: `this.encryptionKey`.

SHA-256 do trecho: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

### state-worker:21820

Chamadas escritas diretamente neste corpo: `_EncryptedBlobStore.deriveKey`.

Alvos de atribuição ou incremento: `this.encryptionKey`.

SHA-256 do trecho: `ce31ba47300fc24a886e1cc8811a64a15d98451a136b614b318de1b9ba4038e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
