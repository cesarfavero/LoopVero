# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499801-499863](../../../../../../../reference/runtime/host-main.cjs#L499801-L499863) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499801-499863](../../../../../../../reference/runtime/host-main.cjs#L499801-L499863) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:499801

Chamadas escritas diretamente neste corpo: `bestEffortAccessToken`, `context2.deps.settings.noteSelectedTeamScopeSourceChanged`, `context2.deps.settings.setSelectedTeamScopeSource`, `context2.onStop`, `createHostAuthService`, `createRetryPolicy`, `createSelectedTeamReader`, `new GrokBotBoxIdentityMintClient`, `service.peekAccessToken`, `service.peekBoxIdentityCredential`, `service.subscribeToRenewal`, `startGrokBotBoxIdentitySocketServer`, `started2.catch`.

SHA-256 do trecho: `072b685ad7a1f5b7141320f1661d8b09d75037db181a7a860fc84bb91e79a637`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
