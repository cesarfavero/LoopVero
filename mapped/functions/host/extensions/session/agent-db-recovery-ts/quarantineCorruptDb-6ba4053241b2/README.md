# `quarantineCorruptDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717903-717922](../../../../../../../reference/runtime/host-main.cjs#L717903-L717922) | `FunctionDeclaration` | não | `dbPath, agentDirName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717903-717922](../../../../../../../reference/runtime/host-main.cjs#L717903-L717922) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:717903

Chamadas escritas diretamente neste corpo: `quarantineCorruptSqliteDb`, `reportSessionDiagnostic`.

SHA-256 do trecho: `1864d7a2cab17332305c65c3c6f36d8a746327bd4113f32486ca4cf1157935ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
