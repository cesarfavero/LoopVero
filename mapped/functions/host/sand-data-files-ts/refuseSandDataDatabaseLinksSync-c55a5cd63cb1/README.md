# `refuseSandDataDatabaseLinksSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453873-453876](../../../../../reference/runtime/host-main.cjs#L453873-L453876) | `FunctionDeclaration` | não | `target` |
| [state-worker:526-529](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L526-L529) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453873-453876](../../../../../reference/runtime/host-main.cjs#L453873-L453876) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:526-529](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L526-L529) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453873

Chamadas escritas diretamente neste corpo: `withParentNoFollowSync`.

SHA-256 do trecho: `192ddab6d40232c7cdc64037bc240c53bdc3bcd98eb5c18f8fe84956a3fed054`.

### state-worker:526

Chamadas escritas diretamente neste corpo: `withParentNoFollowSync`.

SHA-256 do trecho: `cf4497ec8af4d89cb6b615485be10646d5a1abbd704235dbbed0a07d12f8fcbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
