# `_EncryptedBlobStore.deriveKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/cached-blob-store.js` · [README do módulo](../../../../modules/agent-kv/cached-blob-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616441-616446](../../../../../reference/runtime/host-main.cjs#L616441-L616446) | `method` | sim | `keyStr` |
| [evaluation:284981-284986](../../../../../reference/runtime/sand-eval-runner.cjs#L284981-L284986) | `method` | sim | `keyStr` |
| [state-worker:21814-21819](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21814-L21819) | `method` | sim | `keyStr` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616441-616446](../../../../../reference/runtime/host-main.cjs#L616441-L616446) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284981-284986](../../../../../reference/runtime/sand-eval-runner.cjs#L284981-L284986) | 0 | 0 | 1 | 1 | 0 | 0 |
| [state-worker:21814-21819](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21814-L21819) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:616441

Chamadas escritas diretamente neste corpo: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 do trecho: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

### evaluation:284981

Chamadas escritas diretamente neste corpo: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 do trecho: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

### state-worker:21814

Chamadas escritas diretamente neste corpo: `crypto.subtle.digest`, `crypto.subtle.importKey`, `encoder2.encode`, `new TextEncoder`.

SHA-256 do trecho: `8d3d1e99af82744f753c53f1338612c107cd43ac5730d73e4f9d19a7b0283295`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
