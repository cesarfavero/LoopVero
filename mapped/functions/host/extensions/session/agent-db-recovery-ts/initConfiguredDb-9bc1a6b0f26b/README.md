# `initConfiguredDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717843-717869](../../../../../../../reference/runtime/host-main.cjs#L717843-L717869) | `FunctionDeclaration` | não | `dbPath, agentDirName, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717843-717869](../../../../../../../reference/runtime/host-main.cjs#L717843-L717869) | 0 | 0 | 0 | 1 | 1 | 3 |

### host:717843

Chamadas escritas diretamente neste corpo: `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `errorLogTag`, `new import_node_sqlite5.DatabaseSync`, `refuseSandDataDatabaseLinksSync`, `reportSessionDiagnostic`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `88dfbf203912db5a8f4395639074e8f7d88d1de119fc1e85fdbd24a191763e62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
