# `recoverCorruptStoreDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717870-717902](../../../../../../../reference/runtime/host-main.cjs#L717870-L717902) | `FunctionDeclaration` | não | `dbPath, agentDirName, options2, cause` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717870-717902](../../../../../../../reference/runtime/host-main.cjs#L717870-L717902) | 3 | 0 | 0 | 1 | 0 | 1 |

### host:717870

Chamadas escritas diretamente neste corpo: `errorLogTag`, `initConfiguredDb`, `options2.onCorruptionRecovered`, `publishTranscriptMutation`, `quarantineCorruptDb`, `reportSessionDiagnostic`, `salvageStoreDb`.

SHA-256 do trecho: `237aef74eacfc722bb8b6d1c5c77374eaf8a605add1324e351767023d27d18b0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
