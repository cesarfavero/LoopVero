# `SandBoxStoreServiceObjectStore.uploadMultipart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475062-475132](../../../../../../../reference/runtime/host-main.cjs#L475062-L475132) | `method` | sim | `key, srcPath, multipart` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475062-475132](../../../../../../../reference/runtime/host-main.cjs#L475062-L475132) | 10 | 2 | 4 | 2 | 5 | 2 |

### host:475062

Chamadas escritas diretamente neste corpo: `.sort`, `String`, `new SandBoxStoreSyncError`, `putPart`, `this.bestEffortAbortMultipart`, `this.client.completeSandBoxStoreMultipartWrites`, `uploaded.push`.

Alvos de atribuição ou incremento: `attempt`, `lastFailure`, `result`.

Alvos de lançamento explícito: `SandBoxStoreSyncError`, `error64`.

SHA-256 do trecho: `7d17a624cf3ba151bfc5a602b51f794103c5df8fd1fe8357a0a352401bd8c84e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
