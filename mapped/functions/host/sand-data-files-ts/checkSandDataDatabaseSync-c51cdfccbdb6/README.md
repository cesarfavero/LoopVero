# `checkSandDataDatabaseSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453877-453885](../../../../../reference/runtime/host-main.cjs#L453877-L453885) | `FunctionDeclaration` | não | `db, target` |
| [state-worker:530-538](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L530-L538) | `FunctionDeclaration` | não | `db, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453877-453885](../../../../../reference/runtime/host-main.cjs#L453877-L453885) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:530-538](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L530-L538) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453877

Chamadas escritas diretamente neste corpo: `withParentNoFollowSync`.

SHA-256 do trecho: `9c580f303e05de7fdfbbde9d7561e1a7f8fe2f8958ed83cd013b846f43f9972a`.

### state-worker:530

Chamadas escritas diretamente neste corpo: `withParentNoFollowSync`.

SHA-256 do trecho: `fac8a7b3c1d98cbd77de8b7de2af63e8f70d41cf92f6daacb10cd7c8c25cf1e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
