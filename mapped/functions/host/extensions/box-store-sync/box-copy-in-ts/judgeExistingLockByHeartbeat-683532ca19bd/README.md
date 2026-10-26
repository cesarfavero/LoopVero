# `judgeExistingLockByHeartbeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483760-483792](../../../../../../../reference/runtime/host-main.cjs#L483760-L483792) | `FunctionDeclaration` | sim | `lockPath, fs33 = {   readFile: (path33, encoding) => (0, import_promises24.readFile)(path33, encoding),   stat: (path33) => (0, import_promises24.stat)(path33) }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483760-483792](../../../../../../../reference/runtime/host-main.cjs#L483760-L483792) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:483760

Chamadas escritas diretamente neste corpo: `BOOT_COPY_IN_HEARTBEAT_POLL.runWithRetry`.

SHA-256 do trecho: `84db5abc67573246fd506a381efe759122d46f74cd68c2212a1d4358f309abf2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
