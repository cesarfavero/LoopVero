# `mainDatabaseFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453886-453889](../../../../../reference/runtime/host-main.cjs#L453886-L453889) | `FunctionDeclaration` | não | `db` |
| [state-worker:539-542](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L539-L542) | `FunctionDeclaration` | não | `db` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453886-453889](../../../../../reference/runtime/host-main.cjs#L453886-L453889) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:539-542](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L539-L542) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453886

Chamadas escritas diretamente neste corpo: `.get`, `db.prepare`.

SHA-256 do trecho: `6f1e3727ba5bffeb7ad0bdf2e281826b462044747f35acbe622f720aaf03c60b`.

### state-worker:539

Chamadas escritas diretamente neste corpo: `.get`, `db.prepare`.

SHA-256 do trecho: `2696e521b285f6c754b079cccdfe870015ef9792cfc4c4376e3d04d4e86ad19f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
