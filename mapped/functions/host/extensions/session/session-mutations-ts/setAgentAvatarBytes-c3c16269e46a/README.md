# `setAgentAvatarBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-mutations.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-mutations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722735-722761](../../../../../../../reference/runtime/host-main.cjs#L722735-L722761) | `FunctionDeclaration` | sim | `host, db, dbPath, agentId, pngBytes, activeAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722735-722761](../../../../../../../reference/runtime/host-main.cjs#L722735-L722761) | 2 | 1 | 3 | 1 | 0 | 0 |

### host:722735

Chamadas escritas diretamente neste corpo: `Buffer.from`, `buildSummary`, `db.getSandProfile`, `db.setSandProfile`, `dropLegacyProfileAvatar`, `ensureSandDataDirSync`, `invalidateAvatarDataUrlCache`, `listConventionalAvatarFilenames`, `loadAgentDbExtras`, `removeSandDataFileSync`, `statIfExists`, `writeSandDataFile`.

SHA-256 do trecho: `be6085971b2d2bc05a70602fe20edcb554d78c87e1024296923d4d559da9ff99`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
